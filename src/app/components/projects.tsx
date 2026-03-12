"use client"; // mark as client component

import React, { useState, useEffect, useMemo } from "react";
import ScreenshotGallery from "../components/gallery";
import { Filters } from "./portfolio";

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
    visibility: string;
    type: string;
    scope: string;
    video: string;
    screenshots: string[];
    startDate: string;
    endDate: string;
}

interface ProjectsProps {
    searchQuery: string,
    filters: Filters
}

export default function Projects({ searchQuery, filters }: ProjectsProps) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    useEffect(() => {
        fetch("documents/portfolio.json")
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error("Error fetching/parsing JSON: ", error))
    }, []);

    const showProjectModal = (project: Project) => {
        document.body.style.overflow = 'hidden';
        setSelectedProject(project);
    };
    
    const closeProjectModal = () => {
        document.body.style.overflow = '';
        setSelectedProject(null);
    };
    
    const filteredProjects = useMemo(() => {
        // sort by comparator
        projects.sort(projectDateComparator);
        
        // filters for searched title, short desc, technologies, organization
        const filteredProjects = projects.filter(project => {
            const searchLower = (searchQuery || "").toLowerCase();
            let techFound = project.technologies.some((tech) => {
                return tech.toLowerCase().includes(searchLower);
            });

            const matchesSearch =
                project.title.toLowerCase().includes(searchLower) || 
                project.shortDescription.toLowerCase().includes(searchLower) ||
                project.organization.toLowerCase().includes(searchLower) ||
                techFound;

            const visibilityFound = filters.visibility == "all" || filters.visibility == project.visibility;
            const typeFound = filters.type == "all" || filters.type == project.type;
            const scopeFound = filters.scope == "all" || filters.scope == project.scope;

            const matchesFilters = visibilityFound && typeFound && scopeFound;

            return matchesSearch && matchesFilters;
        });

        return filteredProjects;
    }, [projects, searchQuery, filters]);

    return (
        <div className={portfolioStyles.projectsContainer}>
            {filteredProjects.map((project, index) => (
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

                    <button onClick={() => showProjectModal(project)}>Learn More</button>
                </div>
            ))}

        {selectedProject && (
            <div className={portfolioStyles.modalOverlay} onClick={closeProjectModal}>
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

                        <p><a href={selectedProject.github}> GitHub {selectedProject.visibility == "public" ? "" : "(private)"} </a></p>
                        
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

                        <button onClick={closeProjectModal}>Close</button>
                    </div>
                </div>
            </div>
        )}

        </div>
    );
}