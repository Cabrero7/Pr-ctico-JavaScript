const form = document.getElementById('formCorreo');
const correoInput = document.getElementById('correo');
const correoGuardadoDiv = document.getElementById('correoGuardado');
const eliminarBtn = document.getElementById('eliminarCorreo');

function mostrarCorreoGuardado() {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        correoGuardadoDiv.innerHTML = `Correo guardado: ${correoGuardado}`;
        eliminarBtn.style.display = 'block';
    } else {
        correoGuardadoDiv.innerHTML = '';
        eliminarBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', mostrarCorreoGuardado);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = correoInput.value;
    localStorage.setItem('correo', correo);
    mostrarCorreoGuardado();
    form.reset(); 
});

eliminarBtn.addEventListener('click', () => {
    localStorage.removeItem('correo');
    mostrarCorreoGuardado();
});