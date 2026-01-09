// 1. Remove Loader after page loads
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => { loader.style.display = 'none'; }, 800);
});

// 2. Reveal Sections on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// 1. Smooth Scroll for Shop Button
function shopNow() {
    const target = document.getElementById('products');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// 2. Reveal Sections on Scroll (The "Fail-Safe" Version)
const revealOnScroll = () => {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100; // Trigger when 100px of the section is visible

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        } else {
            // Optional: remove "active" to animate again when scrolling up
            // element.classList.remove("active"); 
        }
    });
};

// Run on scroll and also once on page load (in case user is already at the bottom)
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);