"use client"; // mark as client component

import React, {Component} from "react";
import Image from "next/image";
import ScreenshotGallery from "../components/gallery";

import portfolioStyles from "../../../styles/portfolio.module.css";
import galleryStyles from "../../../styles/gallery.module.css";

function dateToNumber(dateStr: string): number {
    if(dateStr == "") return 999999999999999; // this is ugly
    const date = new Date(dateStr);
    return date.getTime();
}

// returns sorting info for project end date
function projectDateComparator(project1: Project, project2: Project): number {
    const endDate1 = dateToNumber(project1.endDate);
    const endDate2 = dateToNumber(project2.endDate);

    // if dates are not the same, return info on which date is greater
    if(endDate1 != endDate2)
        return endDate2 - endDate1;
    
    // otherwise, return in alphabetical order
    return projectTitleComparator(project1, project2);
}

// returns sorting info for project title
function projectTitleComparator(project1: Project, project2: Project): number {
    return project1.title.localeCompare(project2.title);
}

// format scope for display purposes
function formatScope(scope: string): string {
    var out = scope.charAt(0).toUpperCase() + scope.slice(1);
    if(out.includes("-")) {
        let index = out.indexOf("-") + 1;
        out = out.slice(0, index) + scope.charAt(index).toUpperCase() + scope.slice(index + 1);
    }
    return out.replaceAll("-", " ");
}

function handleLinkMarkdown(text: string): string {
    const stripped_link = text.replace(/.*[\[]{1}.*[\]]{1}|[\(]{1}|[\)]{1}.*/g, "");
    const stripped_text = text.replace(/.*[\[]{1}|[\]]{1}|[\(]{1}.*[\)]{1}.*/g, "");

    return text.replace(/\[.*\]\(.*\)/g, `<a href="${stripped_link}" target="_blank">${stripped_text}</a>`);
}

interface Project {
    organization: string;
    organizationLink: string;
    title: string;
    github: string;
    itch: string;
    shortDescription: string;
    longDescription: string;
    technologies: string[];
    isPublic: boolean;
    type: string;
    scope: string;
    video: string;
    screenshots: string[];
    startDate: string;
    endDate: string;
}

interface ProjectsProps {
    searchQuery: string;
    filters: {
        visibility: string,
        type: string,
        scope: string
    }
}

interface ProjectsState {
    projects: Project[];
    selectedProject: Project | null;
}

class Projects extends Component<ProjectsProps, ProjectsState> {
    constructor(props: ProjectsProps) {
        super(props);
        this.state = {
            projects: [],
            selectedProject: null
        };
    }

    componentDidMount(): void {
        fetch("documents/portfolio.json")
            .then(response => response.json())
            .then(data => {
                this.setState({projects: data})
            })
            .catch(error => console.error("Error fetching/parsing JSON: ", error))
    }

    showProjectModal = (project: Project) => {
        document.body.style.overflow = 'hidden';
        this.setState({ selectedProject: project });
    };
    
    closeProjectModal = () => {
        document.body.style.overflow = '';
        this.setState({ selectedProject: null });
    };
    

    render(): React.ReactNode {
        const {projects} = this.state;
        const {searchQuery} = this.props;
        
        // sort by
        projects.sort(projectDateComparator);
        
        // filters for searched title, short desc, technologies, organization
        const searchFiltered = projects.filter(project => {
            const searchLower = searchQuery.toLowerCase();
            let techFound = false;

            // search technology substrings
            project.technologies.forEach(technology => {
                const lower = technology.toLowerCase();

                if(lower.includes(searchLower)) {
                    techFound = true;
                }
            });

            return project.title.toLowerCase().includes(searchLower) || 
                    project.shortDescription.toLowerCase().includes(searchLower) ||
                    project.organization.toLowerCase().includes(searchLower) ||
                    techFound;
        });

        // filter based on radio button inputs
        const radioFiltered = searchFiltered.filter(project => {
            let visibilityFound = false, typeFound = false, scopeFound = false;

            visibilityFound = 
                this.props.filters.visibility == "all" ||
                (this.props.filters.visibility == "public" && project.isPublic) ||
                (this.props.filters.visibility == "private" && !project.isPublic);

            typeFound =
                this.props.filters.type == "all" ||
                (this.props.filters.type == project.type);


            scopeFound =
                this.props.filters.scope == "all" ||
                (this.props.filters.scope == project.scope);

            return visibilityFound && typeFound && scopeFound;
        });

        const selectedProject = this.state.selectedProject;

        return (
        <div className={portfolioStyles.projectsContainer}>
            {radioFiltered.map((project, index) => (
                <div key={index} className={portfolioStyles.project}>
                    <h2 className={portfolioStyles.title}> {project.title} </h2>
                    <p className={portfolioStyles.scope}> ({ formatScope(project.scope) }) </p>
                    <b/>
                    <p className={portfolioStyles.projDetails}> <b>Technologies: </b>{project.technologies.join(", ")} </p>
                    <p className={portfolioStyles.projDetails}> <b>Dates: </b> {project.startDate} - {project.endDate != "" ? project.endDate : "Present"} </p>
                    <p className={portfolioStyles.shortDesc}> {project.shortDescription} </p>

                    {project.screenshots && project.screenshots.length > 0 && (
                        <img src={"/images/projects/" + project.screenshots[0]} alt={`${project.title} screenshot`} className={portfolioStyles.screenshot}/>
                    )}

                    <button onClick={() => this.showProjectModal(project)}>Learn More</button>
                </div>
            ))}

        {selectedProject && (
            <div className={portfolioStyles.modalOverlay} onClick={this.closeProjectModal}>
                <div className={portfolioStyles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <div className={portfolioStyles.modalScroll}>
                        <h2 className={portfolioStyles.title}> {selectedProject.title} </h2>
                        <p className={portfolioStyles.scope}> ({ formatScope(selectedProject.scope) }) </p>
                        <b/>
                        <p className={portfolioStyles.projDetails}> <b>Technologies: </b>{selectedProject.technologies.join(", ")} </p>
                        <p className={portfolioStyles.projDetails}> <b>Dates: </b> {selectedProject.startDate} - {selectedProject.endDate != "" ? selectedProject.endDate : "Present"} </p>
                        
                        {/* either select longDesc or shortDesc, depending on availability */}
                        {(selectedProject.longDescription !== "" && selectedProject.longDescription !== "TODO") ? (
                            <div
                                dangerouslySetInnerHTML={{ __html: handleLinkMarkdown(selectedProject.longDescription)}}></div>
                        ) : (
                            <p className={portfolioStyles.shortDesc}>{selectedProject.shortDescription}</p>
                        )}

                        <p><a href={selectedProject.github}> GitHub {selectedProject.isPublic ? "" : "(private)"} </a></p>
                        
                        {selectedProject.itch && selectedProject.itch != "" &&
                        <a href={selectedProject.itch}>
                            <img src={"images/itch.png"} alt="Available on itch.io" className={portfolioStyles.itch}/>
                        </a>
                        }

                        {selectedProject.video && (
                            <iframe
                                src={selectedProject.video}
                                allowFullScreen
                                loading="lazy"
                                className={portfolioStyles.video}
                            ></iframe>
                        )}

                        {/* Display screenshots if any */}
                        {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                            <ScreenshotGallery
                                screenshots={selectedProject.screenshots}
                                projectTitle={selectedProject.title}
                            />
                        )}

                        <button onClick={this.closeProjectModal}>Close</button>
                    </div>
                </div>
            </div>
        )}

        </div>


        );
    }
}

export default Projects;