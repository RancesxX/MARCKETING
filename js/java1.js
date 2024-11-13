const positions = {};
let currentIndex = 0;

function mover(carruselId, direccion) {
    const tipos = document.querySelector(`#${carruselId} .tipos`);
    const items = tipos.querySelectorAll('.car1, .art1'); // Selecciona los elementos individuales
    const totalItems = items.length;

    // Inicializa la posición si no existe
    if (!positions[carruselId]) {
        positions[carruselId] = 0;
    }

    // Actualiza la posición
    positions[carruselId] += direccion;
    if (positions[carruselId] < 0) positions[carruselId] = totalItems - 1;
    if (positions[carruselId] >= totalItems) positions[carruselId] = 0;

    // Calcula el desplazamiento
    const itemWidth = items[0].offsetWidth; // Ancho del primer elemento
    const desplazamiento = -positions[carruselId] * itemWidth; 
    tipos.style.transform = `translateX(${desplazamiento}px)`;
}

// Ejemplo de uso
// mover('carrito', 1); // Para mover a la derecha
// mover('carrito', -1); // Para mover a la izquierda