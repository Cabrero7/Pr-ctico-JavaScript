function cambiarColor() {
    // Seleccionamos todos los elementos <p>
    const parrafos = document.querySelectorAll('p');
    // Iteramos sobre los elementos y cambiamos el color a azul
    parrafos.forEach(parrafo => {
        parrafo.style.color = 'blue';
    });
}