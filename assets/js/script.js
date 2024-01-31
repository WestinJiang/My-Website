document.addEventListener("DOMContentLoaded", function() {
    // Wait for the document to be fully loaded

    // Get references to the button and projects container
    var toggleButton = document.getElementById("toggleProjects");
    var projectsContainer = document.querySelector(".projects-container");

    // Add click event listener to the button
    toggleButton.addEventListener("click", function() {
        // Toggle the visibility of the projects container
        if (projectsContainer.style.display === "none" || projectsContainer.style.display === "") {
            projectsContainer.style.display = "block";
        } else {
            projectsContainer.style.display = "none";
        }
    });
});
