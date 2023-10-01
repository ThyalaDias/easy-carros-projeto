const carrosselPrev = document.querySelector('.carrossel-carros-prev');
const carrosselNext = document.querySelector('.carrossel-carros-next');
const carrosselWrapper = document.querySelector('.carrossel-carros-wrapper');
const carros = document.querySelectorAll('.carrossel-carros-item');
let currentIndex = 0;
const cardWidth = 280; 

function showSlide(index) {
  const offset = -cardWidth * index;
    carrosselWrapper.style.transform = `translateX(${offset}px)`;
}

carros.forEach((carro, index) => {
    carro.addEventListener('mouseenter', () => {
    // Adicione aqui os estilos de hover desejados para cada item
    carro.style.transform = 'scale(1.07)';
    carro.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)';
   
  });

  carro.addEventListener('mouseleave', () => {
    carro.style.transform = 'scale(1)';
    carro.style.boxShadow = 'none';
  });


  carro.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

carrosselNext.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carros.length -1) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});


carrosselPrev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carros.length - 3;
  }
  showSlide(currentIndex);
});


showSlide(currentIndex);
