document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const mobileDropdown = document.querySelector('.mobile-dropdown');
    const closeIcon = document.getElementById('closeIcon');

    mobileMenuIcon.addEventListener('click', () => {
        mobileDropdown.classList.toggle('active');
    });

    closeIcon.addEventListener('click', () => {
        mobileDropdown.classList.remove('active');
    });

    const sections = document.querySelectorAll('.section-fade');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});