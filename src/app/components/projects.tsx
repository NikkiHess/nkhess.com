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