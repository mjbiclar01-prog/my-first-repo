
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.info-card, .project a, .top-nav a').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

function switchTab(tabId) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    // Add active to the corresponding tab button
    const tabButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    if (tabButton) tabButton.classList.add('active');

