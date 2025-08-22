// Create a class for the element
class Widget extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
       
    }
}

customElements.define("widget", Widget);