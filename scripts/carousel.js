document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const meuNextButton = document.getElementById('meuNextButton');
    const meuPrevButton = document.getElementById('meuPrevButton');

function showSlide(n) {
    if (n >= slides.length) {
    currentSlide = 0;
    } else if (n < 0) {
    currentSlide = slides.length - 1;
    }

    slides.forEach((slide, index) => {
    if (index === currentSlide) {
        slide.style.display = 'block';
    } else {
        slide.style.display = 'none';
    }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

meuNextButton.addEventListener('click', () => {
    clearInterval(autoPlayInterval);
    nextSlide();
});

meuPrevButton.addEventListener('click', () => {
    clearInterval(autoPlayInterval);
    prevSlide();
});

// Autoplay
let autoPlayInterval = setInterval(nextSlide, 5000);

// Iniciar o carrossel
showSlide(currentSlide);
});
