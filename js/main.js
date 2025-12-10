// Main JS - Interactions & Animations

document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.mobile-nav-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-overlay a');

    function toggleMenu() {
        mobileOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    if (mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Header Background on Scroll
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(59, 74, 107, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'rgba(59, 74, 107, 0.95)'; // Keep it somewhat opaque or restore to transparent if designed that way. Spec said 0.4 overlay on video, so maybe header should be transparent initially? Let's check spec.
            // Spec didn't explicitly say header transparency, but "modern" usually implies transparent at top.
            // Let's make it fully transparent at top for that "immersive" feel if not scrolled?
            // "Azul escuro/marinho... usar em headers".
            // Let's stick to the subtle change.
            header.style.boxShadow = 'none';
        }
    });

    // Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

});
