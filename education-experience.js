let hiddenElements = 0;

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.slider-content');
    const items = document.querySelectorAll('.slider-card');

    items.forEach(function (item) {
        const itemRect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (itemRect.left >= containerRect.right) {
            hiddenElements++;
        }
    });
});

const carrossel = document.getElementById('technologies-carrossel');
const images = document.getElementById('technologies-images');
const nextTech = document.getElementById('next-technology');
const previousTech = document.getElementById('previous-technology');

let index = 0;

previousTech.addEventListener('click', () => {

    if(index > 0){
        index--;
        updateCarrossel();
    }
})

nextTech.addEventListener('click', () => {

    if(index < hiddenElements){
        index++;
        updateCarrossel();
    }
})

function updateCarrossel(){
    const position = -index * 12 + '%';
    images.style.transform = 'translateX('+position+')';
}