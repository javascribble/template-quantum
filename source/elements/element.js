import { Component } from '../../references/quantum.js';
import { element } from '../templates/element.js';

export class Element extends Component {
    constructor() {
        super();
    }

    static template = element;

    static attributes = [];
}

customElements.define('quantum-element', Element);