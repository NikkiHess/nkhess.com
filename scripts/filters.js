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

    var visibility = document.querySelector("input[name=\"visibility\"]:checked").id;
    var type = document.querySelector("input[name=\"type\"]:checked").id;

    var selector = `.${visibility}.${type}`;
    var selectedProjects = document.querySelectorAll(selector);

    if(selectedProjects.length == 0) {
        document.querySelector("#no-projects").classList.remove("hidden");
    }
    else {
        document.querySelector("#no-projects").classList.add("hidden");
    }

    selectedProjects.forEach(function(project) {
        project.classList.remove("hidden");
    });
}

// Add event listener for visibility updates
document.querySelectorAll("input[name=\"visibility\"]").forEach(function(radio) {
    radio.addEventListener("change", showSelectedProjects);
})

// Add event listener for type updates
document.querySelectorAll("input[name=\"type\"]").forEach(function(radio) {
    radio.addEventListener("change", showSelectedProjects);
})

toggleAllProjects(true);