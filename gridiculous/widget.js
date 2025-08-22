// Create a class for the element
class Group extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
       
    }
}

customElements.define("group", Group);