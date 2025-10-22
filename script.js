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

    // Project section show more/less functionality
    const projectCardsContainer = document.getElementById('project-cards-container');
    const projectCards = projectCardsContainer ? Array.from(projectCardsContainer.querySelectorAll('.project-card')) : [];
    const showMoreProjectsBtn = document.getElementById('showMoreProjectsBtn');
    const initialVisibleProjects = 4;
    let projectsCurrentlyVisible = initialVisibleProjects;

    if (projectCards.length > 0 && showMoreProjectsBtn) {
        // Initially hide projects beyond the first 'initialVisibleProjects'
        projectCards.forEach((card, index) => {
            if (index >= initialVisibleProjects) {
                card.classList.add('hidden-project');
            }
        });

        // Hide the button if there are 4 or fewer projects
        if (projectCards.length <= initialVisibleProjects) {
            showMoreProjectsBtn.style.display = 'none';
        }

        showMoreProjectsBtn.addEventListener('click', () => {
            if (showMoreProjectsBtn.textContent.includes('Show More')) {
                // Show more projects
                const nextBatch = projectsCurrentlyVisible + 4;
                for (let i = projectsCurrentlyVisible; i < nextBatch && i < projectCards.length; i++) {
                    projectCards[i].classList.remove('hidden-project');
                }
                projectsCurrentlyVisible = Math.min(nextBatch, projectCards.length);

                if (projectsCurrentlyVisible === projectCards.length) {
                    showMoreProjectsBtn.innerHTML = 'Show Less <span class="material-symbols-outlined">arrow_upward</span>';
                }
            } else {
                // Show less projects (reset to initialVisibleProjects)
                for (let i = initialVisibleProjects; i < projectCards.length; i++) {
                    projectCards[i].classList.add('hidden-project');
                }
                projectsCurrentlyVisible = initialVisibleProjects;
                showMoreProjectsBtn.innerHTML = 'Show More <span class="material-symbols-outlined">arrow_downward</span>';
            }
        });
    }
});
