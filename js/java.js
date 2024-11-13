let indice = 0;

function mostrarImagen() {
    const carousel = document.getElementById("carousel");
    const totalSlides = carousel.children.length;
    carousel.style.transform = `translateX(${-indice * 100}%)`;
}

function siguiente() {
    const totalSlides = document.getElementById("carousel").children.length;
    indice = (indice + 1) % totalSlides;
    mostrarImagen();
}

function iniciarCarrusel() {
    mostrarImagen();
    setInterval(siguiente, 4000); // Cambiar imagen cada 3 segundos
}

window.onload = iniciarCarrusel;