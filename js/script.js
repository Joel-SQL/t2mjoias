// carrossel
const images = document.querySelectorAll('.carrossel-image');
let currentIndex = 0;

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

updateCarousel();
