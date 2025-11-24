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

// Actualización con la nueva clase 'apply-job'
document.addEventListener('click', (event) => {
    // Verifica si el elemento clicado es un botón de aplicar empleo
    if (event.target.classList.contains('apply-job')) {
        const boton = event.target;
        boton.classList.add('is-applied');
        boton.textContent = '¡Aplicado!';
        boton.disabled = true;
    }
});

const filter = document.querySelector('#filter-location');
const jobs = document.querySelectorAll('.job-listing-card');

filter.addEventListener('change', () => {
    const selectedLocation = filter.value;
    jobs.forEach(job => {
        const jobLocation = job.getAttribute('data-modalidad');
        const isShown = selectedLocation === '' || jobLocation === selectedLocation;
        job.classList.toggle('is-hidden', !isShown);
    });
});
