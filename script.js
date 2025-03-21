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

document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Respuestas correctas (personaliza según tus necesidades)
    const respuestasCorrectas = {
        "actividad 1-pregunta 1": ["A", "B", "C", "D", "E"], // Respuestas correctas para act1-q1
        "actividad 1-pregunta 2": ["A"], // Respuesta correcta para act1-q2
        "actividad 2-pregunta 1": ["A", "B", "C", "D"], // Respuestas correctas para act2-q1
        "actividad 2-pregunta 2": ["A", "B", "C"], // Respuestas correctas para act2-q2
        "actividad 3-pregunta 1": ["A", "B", "C", "D"], // Respuestas correctas para act3-q1
        "actividad 3-pregunta 2": ["A", "B", "C"], // Respuestas correctas para act3-q2
        "actividad 4-pregunta 1": ["A", "B", "C", "D"], // Respuestas correctas para act4-q1
        "actividad 4-pregunta 2": ["A", "B", "C", "D"], // Respuestas correctas para act4-q2
        "actividad 5-pregunta 1": ["A", "B", "C", "D"], // Respuestas correctas para act5-q1
        "actividad 5-pregunta 2": ["A", "B", "C", "D"] // Respuestas correctas para act5-q2
    };

    let puntajeTotal = 0;
    let resultadosHTML = "<h3>Resultados:</h3>";

    // Evaluar respuestas
    for (const [pregunta, respuestas] of Object.entries(respuestasCorrectas)) {
        // Obtener las respuestas seleccionadas por el usuario
        const opcionesSeleccionadas = Array.from(document.querySelectorAll(`input[name="${pregunta}"]:checked`))
            .map(input => input.value);

        // Verificar si las respuestas seleccionadas coinciden con las respuestas correctas
        const esCorrecta = opcionesSeleccionadas.length === respuestas.length && 
                            opcionesSeleccionadas.every(val => respuestas.includes(val));

        if (esCorrecta) {
            puntajeTotal += 1;
            resultadosHTML += `<p>✅ ${pregunta}: Correcto</p>`;
        } else {
            resultadosHTML += `<p>❌ ${pregunta}: Incorrecto. Las respuestas correctas son: ${respuestas.join(", ")}</p>`;
        }
    }

    // Mostrar resultados
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = resultadosHTML + `<p><strong>Puntaje Total: ${puntajeTotal} / ${Object.keys(respuestasCorrectas).length}</strong></p>`;
});
