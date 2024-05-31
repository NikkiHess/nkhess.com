"use client"; // mark as client component

import React, {Component} from "react";
import portfolioStyles from "../../../styles/portfolio.module.css";

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

interface ProjectsState {
    projects: Project[];
}

function dateToNumber(dateStr: string): number {
    if(dateStr == "") return 999999999999999;
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

class Projects extends Component<{}, ProjectsState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            projects: [],
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
        
        projects.sort(projectDateComparator);

        return (
        <div className={portfolioStyles.projectsContainer}>
            {projects.map((project, index) => (
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