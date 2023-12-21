// Shows/hides all projects
function toggleAllProjects(show) {
    const projects = document.querySelectorAll(".project");

    projects.forEach(function(project) {
        if(show)
            project.classList.remove("hidden");
        else
            project.classList.add("hidden");
    })
}

// Shows projects based on radio button selection
function showSelectedProjects() {
    toggleAllProjects(false);

    // TODO: Is there a better way to do this for expandability?
    // Maybe take header names and iterate them (lowercase), then check?
    var search = document.querySelector("input[name=\"search\"]").value.toLowerCase();
    var visibility = document.querySelector("input[name=\"visibility\"]:checked").id;
    var type = document.querySelector("input[name=\"type\"]:checked").id;
    var scope = document.querySelector("input[name=\"scope\"]:checked").id;

    var selector = `.${visibility}.${type}.${scope}`;
    console.log(selector);
    var selectedProjects = document.querySelectorAll(selector);

    // Update the list based on what is visible by the search query
    selectedProjects = Array.from(selectedProjects).filter(function(project) {
        var projectNameElement = project.querySelector("h2 a.projectName");
        return projectNameElement &&
            projectNameElement.textContent.toLowerCase().includes(search);
    })

    if(selectedProjects.length == 0) {
        document.querySelector("#no-projects").classList.remove("hidden");
    }
    else {
        document.querySelector("#no-projects").classList.add("hidden");
    }

    // Remove hidden from all selected projects
    selectedProjects.forEach(function(project) {
        var projectNameElement = project.querySelector("h2 a.projectName");
        if(projectNameElement &&
            projectNameElement.textContent.toLowerCase().includes(search)) {
                project.classList.remove("hidden");
            }
    });
}

// Add event listener for search updates
document.querySelector("input[name=\"search\"]").addEventListener("input", showSelectedProjects);

// Add event listener for visibility updates
document.querySelectorAll("input[name=\"visibility\"]").forEach(function(radio) {
    radio.addEventListener("change", showSelectedProjects);
});

// Add event listener for type updates
document.querySelectorAll("input[name=\"type\"]").forEach(function(radio) {
    radio.addEventListener("change", showSelectedProjects);
});

// Add event listener for scope updates
document.querySelectorAll("input[name=\"scope\"]").forEach(function(radio) {
    radio.addEventListener("change", showSelectedProjects);
});

toggleAllProjects(true);