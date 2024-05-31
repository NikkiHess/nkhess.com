import portfolioStyles from "../../../styles/portfolio.module.css";
import Papa from "papaparse"

function parseCSV(csvContent: string) {
    // PapaParse will handle this for us <3
    const parsedData = Papa.parse(csvContent, {
        header: true, // Header contains titles
        dynamicTyping: true, // Automatically convert numeric values
    });

    return parsedData.data;
}


const Projects: React.FC = () => {
    return (
        <div>
            
        </div>
    )
}

export default Projects;