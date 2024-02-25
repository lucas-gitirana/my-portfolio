let hiddenCards = 0;

document.addEventListener("DOMContentLoaded", function () {

    const projectsContainer = document.querySelector('.cards-containter');
    const projectsItems = document.querySelectorAll('.project-card');

    projectsItems.forEach(function (item) {
        const itemRect = item.getBoundingClientRect();
        const projectsContainerRect = projectsContainer.getBoundingClientRect();

        if (itemRect.left >= projectsContainerRect.right) {
            hiddenCards++;
        }
    });
});

const projectsCarousel = document.getElementById('projectsCarousel');
const nextProject = document.getElementById('nextProject');
const prevProject = document.getElementById('prevProject');

let projectIndex = 0;

prevProject.addEventListener('click', () => {

    if(projectIndex > 0){
        projectIndex--;
        updateProjectsCarousel();
    }
})

nextProject.addEventListener('click', () => {

    if(projectIndex < hiddenCards){
        projectIndex++;
        updateProjectsCarousel();
    }
})

function updateProjectsCarousel(){
    const position = -projectIndex * 33 + '%';
    projectsCarousel.style.transform = 'translateX('+position+')';
}