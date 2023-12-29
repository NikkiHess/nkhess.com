// TODO: Make projects drop-down
// TODO: Shrink date and move closer to project name
// TODO: Add support for scope (school/open-source/personal)
// TODO: Upload old projects to GitHub (EECS 280, 281)

// Creates a table with the given entries (2D array of DOM elements)
function createTable(elements) {
    var table = document.createElement("table");

    elements.forEach(row => {
        var tableRow = document.createElement("tr");
        row.forEach(data => {
            var tableData = document.createElement("td");
            data.style.verticalAlign = "center";
            tableData.appendChild(data);
            tableRow.appendChild(tableData);
        });
        table.appendChild(tableRow);
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

// Makes a string lowercase and trims it
function lowerTrim(string) {
    return string.toLowerCase().trim();
}

function processScope(string) {
    var out = string.charAt(0).toUpperCase() + string.slice(1);
    return out.replaceAll("-", " ");
}

// Populates the portfolio with parsed entries from a csv file
function populatePortfolio(data) {
    const projectList = document.querySelector("#projectList");
    projectList.innerHTML = "";

    data.forEach(function(entry) {
        var projectDiv = document.createElement('div');

        var classes = ["project"];
        classes.push(lowerTrim(entry.Visibility));
        classes.push(lowerTrim(entry.Type));
        classes.push(lowerTrim(entry.Scope));
        projectDiv.classList.add(...classes);

        // TODO: Allow sort by date?
        var h2 = document.createElement("h2");
        var a = document.createElement("a");
        a.href = entry.GitHub;
        a.classList.add("hyper", "projectName");
        a.textContent = entry.Title;

        h2.appendChild(a);
        projectDiv.appendChild(h2);

        // Create dates and scope
        const datesString = `${entry.StartDate} - ${entry.EndDate}`;
        const scopeString = `Scope: ${processScope(entry.Scope)}`;

        var dates = document.createElement("p");
        dates.innerHTML = datesString;
        var scope = document.createElement("p");
        scope.innerHTML = scopeString;

        var description = document.createElement("p");
        description.classList.add("description");
        description.innerHTML = entry.Description;
        projectDiv.appendChild(description);
        projectDiv.appendChild(dates);
        projectDiv.appendChild(scope);

        if(entry.Video) {
            const video = document.createElement("iframe");
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