// TODO: Make projects drop-down
// TODO: Shrink date and move closer to project name
// TODO: Add support for scope (school/open-source/personal)

// Creates a table with the given entries (strings)
function createTable(entries) {
    var table = document.createElement("table");
    entries.forEach(entry => {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        if(entry.includes("Scope")) entry = entry.replaceAll("-", " ");
        td.textContent = entry;
        td.style.textTransform = "capitalize";

        tr.appendChild(td);
        table.appendChild(tr);
    });

    return table;
}

// Takes in a csv file and parses it using PapaParse
function parseCSV(csvContent) {
    // PapaParse
    const parsedData = Papa.parse(csvContent, {
        header: true, // Header contains titles
        dynamicTyping: true, // Automatically convert numeric values
    });

    return parsedData.data;
}

// Populates the portfolio with parsed entries from a csv file
function populatePortfolio(data) {
    const projectList = document.querySelector("#projectList");
    projectList.innerHTML = "";

    data.forEach(function(entry) {
        const projectDiv = document.createElement('div');

        const classes = ["allVis", "allType", "allScope", "project"].concat(entry.Class.split(" "));
        // TODO: Separate Class into Visibility and Type
        classes.push(entry.Scope.toLowerCase());
        projectDiv.classList.add(...classes);

        // TODO: Make "h2 a" and "table" into big row?
        // TODO: Allow sort by date?
        const h2 = document.createElement("h2");
        const a = document.createElement("a");
        a.href = entry.GitHub;
        a.classList.add("hyper", "projectName");
        a.textContent = entry.Title;

        h2.appendChild(a);
        projectDiv.appendChild(h2);

        const description = document.createElement("p");
        description.innerHTML = entry.Description;
        projectDiv.appendChild(description);

        const datesString = `${entry.StartDate} - ${entry.EndDate}`;
        const scopeString = `${entry.Scope}`;

        const table = createTable([datesString, "Scope: " + scopeString]);
        projectDiv.appendChild(table);

        if(entry.Video) {
            const video = document.createElement("iframe");
            video.classList.add("video");
            video.src = entry.Video;
            video.allowFullscreen = true;
            projectDiv.appendChild(video);
        }

        projectList.appendChild(projectDiv);
    });
}

// Main
const portfolioPath = "portfolio/portfolio.csv";

fetch(portfolioPath)
    .then(response => response.text())
    .then(csvContent => {
        const data = parseCSV(csvContent);
        populatePortfolio(data);
    })
    .catch(error => console.error("Error fetching CSV file:", error));