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
