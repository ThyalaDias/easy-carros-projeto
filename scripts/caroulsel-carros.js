const carrossel = document.querySelector('.carrossel-carros-wrapper');
const carrosselPrev = document.querySelector('.carrossel-carros-prev');
const carrosselNext = document.querySelector('.carrossel-carros-next');

let currentIndex = 0;

// Função para mostrar o slide atual
function showSlide(index) {
const carros = document.querySelectorAll('.carrossel-carros-item');
carros.forEach((carro, i) => {
    carro.style.transform = `translateX(${3000* (i - index)}%)`;
});
}

// Evento do botão "Next"
carrosselNext.addEventListener('click', () => {
currentIndex++;
if (currentIndex >= carrossel.children.length) {
    currentIndex = 0;
}
showSlide(currentIndex);
});

// Evento do botão "Prev"
carrosselPrev.addEventListener('click', () => {
currentIndex--;
if (currentIndex < 0) {
    currentIndex = carrossel.children.length - 1;
}
showSlide(currentIndex);
});

// Mostrar o primeiro slide ao carregar a página
showSlide(currentIndex);