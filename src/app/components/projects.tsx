import React, {useState, Component} from "react";
import portfolioStyles from "../../../styles/portfolio.module.css";

interface Project {
    title: string;
    description: string;
    visibility: string;
    type: string;
    scope: string;
    dateRange: string;
}

class Projects extends Component {
    const [projects, setProjects] = useState([]); // project map

    return (
        <div>
            
        </div>
    )
}

export default Projects;