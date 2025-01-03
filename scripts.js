// Navigation Animations
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-primary', 'shadow');
    } else {
        nav.classList.remove('bg-primary', 'shadow');
    }
});

// Fade-in on Scroll
const faders = document.querySelectorAll('.animate-fade-in');
const sliders = document.querySelectorAll('.animate-slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

// Load More Button Functionality
const loadMoreBtn = document.querySelector('.btn-outline-primary');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
        alert('Load more functionality to be implemented with backend integration.');
    });
}
