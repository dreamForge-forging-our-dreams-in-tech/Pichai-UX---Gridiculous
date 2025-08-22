// Create a class for the element
class Collective extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
       
    }
}

customElements.define("collective", Collective);