
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
});
