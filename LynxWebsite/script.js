document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Save to localStorage
        const messages = JSON.parse(localStorage.getItem("lynxMessages")) || [];
        messages.push({ name, email, message, date: new Date().toLocaleString() });
        localStorage.setItem("lynxMessages", JSON.stringify(messages));

        status.textContent = "✅ Your message has been sent!";
        form.reset();
    });
});

const themeToggle = document.getElementById('themeToggle');

// Load saved theme
if (localStorage.getItem('lynxTheme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️ Light';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
        localStorage.setItem('lynxTheme', isDark ? 'dark' : 'light');
    });
}