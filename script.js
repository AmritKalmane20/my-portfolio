// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Trigger Slide-in Animation when "See My Work" is clicked
document.getElementById('seeWorkBtn').addEventListener('click', function () {
    document.getElementById('portfolio').scrollIntoView({
        behavior: 'smooth'
    });
});

// Smooth scroll for "View My Work" button
const viewMyWorkBtn = document.getElementById('viewMyWorkBtn');
viewMyWorkBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('my-projects').scrollIntoView({
        behavior: 'smooth' // Smooth scroll to the My Projects section
    });
});

// Trigger project visibility when My Projects section is scrolled into view
const myProjectsSection = document.getElementById('my-projects');
const projectList = document.getElementById('project-list');

// Show the project list when My Projects section is in view
window.addEventListener('scroll', function() {
    const sectionTop = myProjectsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) { // Trigger when 80% of section is in view
        projectList.style.display = 'block';
    }
});

window.onload = function() {
    const welcomeText = document.getElementById("welcomeText");
    welcomeText.classList.add("fade-in");
};

function toggleProjects() {
    const projectList = document.getElementById('project-list');
    if (projectList.style.display === 'none') {
        projectList.style.display = 'block';
        projectList.classList.add('slide-down');
    } else {
        projectList.style.display = 'none';
        projectList.classList.remove('slide-down');
    }
}


