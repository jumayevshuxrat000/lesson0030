// Dark Mode tugmasi
const darkModeToggle = document.getElementById('darkModeToggle');

// Browser xotirasidan oldingi holatni o'qish
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Agar oldingi holat quyuq rejim bo'lsa, uni qayta o'rnatish
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

// Tugmani bosganda rejimni o'zgartirish
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Agar quyuq rejim yoqilgan bo'lsa, tugma ikonkasini yangilash
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀️'; // Quyosh ikonkasi
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = '🌙'; // Oyning ikonkasi
    }
});
