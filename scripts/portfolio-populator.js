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

/*
<div class="allVis allType project public game">
    <h2>
        <a href="https://github.com/NikkiHess/CSESimulator" class="hyper projectName">EECS 498 Project 1 - CSE Simulator</a>
    </h2>
    <p> A VR project made with Unreal Engine simulating what it's like to be in <a href="https://caen.engin.umich.edu/profile/beyster-1695/" class="hyper">BBB 1695</a>.</p>
    <iframe class="video" src="https://www.youtube.com/embed/a5ZkLF40U_g" allowfullscreen></iframe>
    <br>
</div>
<div class="allVis allType project private game">
    <h2>
        <a href="https://github.com/Alanhou1222/p2_a2go" class="hyper projectName">EECS 498 Project 2 - A2 Go</a>
    </h2>
    <p> An AR project made with Unity Engine. Basically Pokémon Go but you're planting trees and fighting squirrels.</p>
    <iframe class="video" src="https://www.youtube.com/embed/9KGog6Udv2c" allowfullscreen></iframe>
    <br>
</div>
<div class="allVis allType project private game">
    <h2>
        <a href="https://github.com/neelietu/P3" class="hyper projectName">EECS 498 Project 3 - AR Dog Trainer</a>
    </h2>
    <p> Train a dog in AR! Play fetch, feed him, take him for walks, and more!</p>
    <iframe class="video" src="https://www.youtube.com/embed/6EVJTkTtzyU" allowfullscreen></iframe>
    <br>
</div>
*/
function displayData(data) {
    const projectList = document.querySelector("#projectList");
    projectList.innerHTML = "";

    data.forEach(function(entry) {
        const projectDiv = document.createElement('div');

        const classes = ["allVis", "allType", "project"].concat(entry.Class.split(" "));
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

        const video = document.createElement("iframe");
        video.classList.add("video");
        video.src = entry.Video;
        video.allowFullscreen = true;

        projectDiv.appendChild(description);
        projectDiv.appendChild(video);

        projectList.appendChild(projectDiv);
    });
}