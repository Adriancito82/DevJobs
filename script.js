// Devuelve una NodeList con todos los botones de aplicar empleo
/*const botones = document.querySelectorAll('.button-apply-job');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.classList.add('is-applied');
        boton.textContent = '¡Aplicado!';
        boton.disabled = true;
    });
});*/

// Manera correcta de hacerlo con delegación de eventos
document.addEventListener('click', (event) => {
    // Verifica si el elemento clicado es un botón de aplicar empleo
    if (event.target.classList.contains('button-apply-job')) {
        const boton = event.target;
        boton.classList.add('is-applied');
        boton.textContent = '¡Aplicado!';
        boton.disabled = true;
    }
});
