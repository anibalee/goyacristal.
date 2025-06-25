document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggle-theme');
    let isLightTheme = localStorage.getItem('theme') === 'light'; // Cargar el estado del tema desde localStorage

    // Aplicar el tema inicial
    if (isLightTheme) {
        document.body.classList.add('light');
        toggleThemeButton.innerHTML = '&#9728;'; // Icono de sol
    } else {
        document.body.classList.add('dark');
        toggleThemeButton.innerHTML = '&#9790;'; // Icono de luna
    }

    toggleThemeButton.addEventListener('click', function() {
        isLightTheme = !isLightTheme; // Alternar estado
        document.body.classList.toggle('light', isLightTheme);
        document.body.classList.toggle('dark', !isLightTheme);
        toggleThemeButton.innerHTML = isLightTheme ? '&#9728;' : '&#9790;'; // Cambiar icono
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark'); // Guardar el estado en localStorage
    });
});