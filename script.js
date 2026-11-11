
/* =====================================
   PIXELDIV - BATHNAS NIKITHA
   PORTFOLIO JAVASCRIPT
===================================== */

// 1. SMOOTH NAVIGATION

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function (event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// 2. ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }

    });

});


// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    '.about, .projects, .skills, .contact, .project-card'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// 4. HERO TEXT ANIMATION

window.addEventListener('load', () => {

    const hero = document.querySelector('.hero');

    if (hero) {
        hero.classList.add('hero-loaded');
    }

});


// 5. GALAXY VIDEO SETTINGS

const galaxyVideo = document.querySelector(
    '.video-background video'
);

if (galaxyVideo) {

    galaxyVideo.muted = true;

    galaxyVideo.play().catch(() => {
        console.log('Galaxy video will play when supported.');
    });

}


// 6. FOOTER YEAR

const footerText = document.querySelector('footer p');

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} PixelDiv | Designed & Developed by Bathnas Nikitha`;

}


// 7. CONTACT EMAIL BUTTON

const emailLink = document.querySelector(
    '.contact-details a[href^="mailto:"]'
);

if (emailLink) {
    emailLink.setAttribute(
        'aria-label',
        'Send an email to Bathnas Nikitha'
    );
}


// 8. BACK TO TOP ON LOGO CLICK

const logo = document.querySelector('.logo');

if (logo) {

    logo.addEventListener('click', function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}

console.log('PixelDiv Portfolio Loaded Successfully!');
