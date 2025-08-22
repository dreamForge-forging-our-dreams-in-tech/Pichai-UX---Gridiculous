// Create a class for the element
class Collection extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
       
    }
}

customElements.define("collection", Collection);