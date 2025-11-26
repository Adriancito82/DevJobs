class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); //llamar al constructor de HTMLElement

        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <img src="https://unavatar.io/github/adriancito82" alt="Avatar de adrian"
            class="avatar"
            style="width: 40px; height: 40px; border-radius: 9999px" />
        `;
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar);
