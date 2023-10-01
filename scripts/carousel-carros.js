document.addEventListener("DOMContentLoaded", function () {
  const carrosselPrev = document.querySelector('.carrossel-carros-prev');
  const carrosselNext = document.querySelector('.carrossel-carros-next');
  const carrosselWrapper = document.querySelector('.carrossel-carros-wrapper');
  const carros = document.querySelectorAll('.carrossel-carros-item');
  const cardWidth = 280;
  const numVisibleCards = 3;
  let currentIndex = 0;
  let autoplayInterval;

  function showSlide(index) {
    const offset = -cardWidth * index;
    carrosselWrapper.style.transform = `translateX(${offset}px)`;
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex > carros.length - numVisibleCards) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }, 4000); 
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  carrosselWrapper.addEventListener('mouseenter', stopAutoplay);
  carrosselWrapper.addEventListener('mouseleave', startAutoplay);

  carros.forEach((carro, index) => {
    carro.addEventListener('mouseenter', () => {
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
    if (currentIndex > carros.length - numVisibleCards) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  });

  carrosselPrev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = carros.length - numVisibleCards;
    }
    showSlide(currentIndex);
  });

  startAutoplay();

  showSlide(currentIndex);
});
