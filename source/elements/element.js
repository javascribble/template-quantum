import { Quantum, define } from '@javascribble/quantum';
import { element } from '../templates/element.js';

export class Element extends Quantum {
    constructor() {
        super(element);
    }
}

define(Element);