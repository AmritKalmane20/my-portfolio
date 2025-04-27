// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Trigger Slide-in Animation when "See My Work" is clicked
document.getElementById('seeWorkBtn').addEventListener('click', function () {
    document.getElementById('portfolio').scrollIntoView({
        behavior: 'smooth'
    });
});

function toggleProject(project) {
    // Hide all project contents first
    const allProjects = document.querySelectorAll('.project-content');
    allProjects.forEach((content) => {
        content.style.display = 'none';
    });

    // Show the selected project content
    const selectedProject = document.getElementById(project);
    if (selectedProject) {
        selectedProject.style.display = 'block';
    }
}


