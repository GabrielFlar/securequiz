// app.js - Main application logic and navigation

document.addEventListener('DOMContentLoaded', function () {
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const sections = document.querySelectorAll('.section');
    const navigateButtons = document.querySelectorAll('[data-navigate]');

    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');

            // Update nav links
            navLinks.forEach(link => {
                if (link.dataset.section === sectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.dataset.section;
            showSection(sectionId);
        });
    });

    // Navigate button clicks
    navigateButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetSection = this.dataset.navigate;
            showSection(targetSection);
        });
    });

    // Hash navigation
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        showSection(hash);
    } else {
        showSection('home');
    }

    // Update hash on navigation
    window.addEventListener('hashchange', function () {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            showSection(hash);
        }
    });
});
