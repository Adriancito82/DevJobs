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
const mensaje = document.querySelector('#filter-selected-value');

filter.addEventListener('change', () => {

    const jobs = document.querySelectorAll('.job-listing-card');

    const selectedLocation = filter.value;

    /*if (selectedLocation) {
        mensaje.textContent = `Has seleccionado: ${selectedLocation}`;
    } else {
        mensaje.textContent = '';
    }*/

    jobs.forEach(job => {
        const jobLocation = job.getAttribute('data-modalidad');
        const isShown = selectedLocation === '' || jobLocation === selectedLocation;
        job.classList.toggle('is-hidden', !isShown);
    });
});


const container = document.querySelector('.jobs-listings');

fetch("./data.json")
    .then((response) => {
        return response.json();
    })
    .then((jobs) => {
        jobs.forEach(job => {

        const article = document.createElement('article');
        article.className = 'job-listing-card';

        article.dataset.modalidad = job.data.modalidad;
        article.dataset.nivel = job.data.nivel;
        article.dataset.tecnology = job.data.tecnology;

        article.innerHTML = `
            <div>
                <h3>${job.titulo}</h3>
                <small>${job.empresa} | ${job.ubicacion}</small>
                <p>${job.descripcion}</p>
            </div>
            <button class="apply-job">Aplicar</button>`
            container.appendChild(article);
        });

    })

