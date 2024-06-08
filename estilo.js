document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;

        const newPosition = currentIndex * slides[0].clientWidth;

        slidesContainer.style.transform = `translateX(-${newPosition}px)`;
    }

    function startCarousel() {
        setInterval(nextSlide, 1000); // Muda o slide a cada 3 segundos
    }

    // Iniciar o carrossel automático ao carregar a página
    startCarousel();
});
