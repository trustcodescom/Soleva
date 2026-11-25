// AOS.init({
//     duration: 800,
//     once: true,
//     offset: 100
// });


// ==========================================
// SCROLL ANIMATION OBSERVER
// ==========================================

const animatedElements = document.querySelectorAll('[data-animate]');

const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

animatedElements.forEach(element => {

    // Set animation duration
    const duration = element.dataset.duration || 800;

    // Set animation delay
    const delay = element.dataset.delay || 0;

    element.style.setProperty(
        '--animation-duration',
        `${duration}ms`
    );

    element.style.setProperty(
        '--animation-delay',
        `${delay}ms`
    );

    animationObserver.observe(element);
});