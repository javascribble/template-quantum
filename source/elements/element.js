import { Component } from '../../references/quantum.js';

export class Element extends Component {
    constructor() {
        super();
    }

    static attributes = [];
}

customElements.define('quantum-element', Element);