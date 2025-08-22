// Create a class for the element
class Widgets extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
       
    }
}

customElements.define("widgets", Widgets);