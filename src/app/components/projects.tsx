"use client"; // mark as client component

import React, {Component} from "react";
import portfolioStyles from "../../../styles/portfolio.module.css";

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

interface Project {
    organization: string;
    organizationLink: string;
    title: string;
    github: string;
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
}

class Projects extends Component<ProjectsProps, ProjectsState> {
    constructor(props: ProjectsProps) {
        super(props);
        this.state = {
            projects: []
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

        return (
        <div className={portfolioStyles.projectsContainer}>
            {radioFiltered.map((project, index) => (
                <div key={index} className={portfolioStyles.project}>
                    <h2 className={portfolioStyles.title}> {project.title} </h2> {/* TODO: make this open a JS popup of the project in question later */}
                    <p className={portfolioStyles.scope}> ({project.scope}) </p>
                    <b/>
                    <p className={portfolioStyles.projDetails}> <b>Technologies: </b>{project.technologies.join(", ")} </p>
                    <p className={portfolioStyles.projDetails}> <b>Dates: </b> {project.startDate} - {project.endDate != "" ? project.endDate : "Present"} </p>
                    <p className={portfolioStyles.shortDesc}> {project.shortDescription} </p>
                    <p><a href={project.github}> GitHub {project.isPublic ? "" : "(private)"} </a></p>
                    {project.video && (
                        <iframe
                            src={project.video}
                            allowFullScreen
                            loading="lazy"
                            className={portfolioStyles.video}
                        ></iframe>
                    )}
                </div>
            ))}
        </div>
        );
    }
}

export default Projects;