document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkMode = document.getElementById("toggle-dark-mode");
    const body = document.body;
    const searchInput = document.getElementById("search");

    // Guardar la preferencia de modo oscuro en localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleDarkMode.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // Búsqueda de contenido en el blog
    searchInput.addEventListener("input", function () {
        let filter = searchInput.value.toLowerCase();
        let cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
            let text = card.innerText.toLowerCase();
            if (text.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
// Obtén todas las imágenes dentro de los elementos con clase "diagrama"
const images = document.querySelectorAll('.diagrama img');

// Itera sobre cada imagen y agrega un evento de clic
images.forEach(image => {
    image.addEventListener('click', function() {
        // Alterna la clase 'zoom' cuando se hace clic en la imagen
        image.classList.toggle('zoom');
    });
});

// Función para animar o hacer una "cinemática" cuando se hace clic en una imagen de autor
document.querySelectorAll('.author-image').forEach(image => {
    image.addEventListener('click', () => {
        alert(`¡Has hecho clic en ${image.alt}!`);
        // Aquí puedes agregar más animaciones o efectos cinematográficos que desees
    });
});

document.querySelectorAll('.author-ball').forEach(ball => {
    ball.addEventListener('mouseenter', () => {
        const name = ball.getAttribute('data-name');
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = name;
        ball.appendChild(tooltip);
    });

    ball.addEventListener('mouseleave', () => {
        const tooltip = ball.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});



const img = document.getElementById('timeline-img');

img.addEventListener('click', function() {
    this.classList.toggle('zoom'); // Agrega o quita la clase 'zoom' al hacer clic
});