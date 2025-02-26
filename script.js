function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
}

// Apply theme to Google CSE
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            const gscElement = document.querySelector('.gsc-control-cse');
            if (gscElement) {
                gscElement.style.backgroundColor = 'var(--background)';
                gscElement.style.border = 'none';
            }
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });