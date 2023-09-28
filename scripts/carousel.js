
let currentSlide = 0;

function showSlide(n) {
const slides = document.querySelectorAll('.carousel-slide');
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

// Auto play
let autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

