import { Component, template, define } from '../import.js';
import html from '../templates/element.js';

export class Element extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-element', Element);