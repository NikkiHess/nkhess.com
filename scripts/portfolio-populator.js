// TODO: Make projects drop-down
// TODO: Shrink date and move closer to project name
// TODO: Add support for scope (school/open-source/personal)

const portfolioPath = "portfolio/portfolio.csv";

fetch(portfolioPath)
    .then(response => response.text())
    .then(csvContent => {
        const data = parseCSV(csvContent);
        displayData(data);
    })
    .catch(error => console.error("Error fetching CSV file:", error));

function parseCSV(csvContent) {
    // PapaParse
    const parsedData = Papa.parse(csvContent, {
        header: true, // Header contains titles
        dynamicTyping: true, // Automatically convert numeric values
    });

    return parsedData.data;
}

function displayData(data) {
    const projectList = document.querySelector("#projectList");
    projectList.innerHTML = "";

    data.forEach(function(entry) {
        const projectDiv = document.createElement('div');

        const classes = ["allVis", "allType", "project"].concat(entry.Class.split(" "));
        classes.push(entry.Scope.toLowerCase());
        projectDiv.classList.add(...classes);

        const h2 = document.createElement("h2");
        const a = document.createElement("a");
        a.href = entry.GitHub;
        a.classList.add("hyper", "projectName");
        a.textContent = entry.Title;

        h2.appendChild(a);
        projectDiv.appendChild(h2);

        const dates = document.createElement("p");
        dates.textContent = `${entry.StartDate} - ${entry.EndDate}`;

        projectDiv.appendChild(dates);

        const description = document.createElement("p");
        description.innerHTML = entry.Description;

        if(entry.Video) {
            const video = document.createElement("iframe");
            video.classList.add("video");
            video.src = entry.Video;
            video.allowFullscreen = true;
            projectDiv.appendChild(video);
        }

        projectDiv.appendChild(description);

        projectList.appendChild(projectDiv);
    });
}