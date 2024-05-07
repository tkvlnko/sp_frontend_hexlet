/* eslint-disable class-methods-use-this */

import HTMLPairElement from './HTMLPairElement.js';

class HTMLDivElement extends HTMLPairElement {
getTagName() {
    return 'div';
}
}

export default HTMLDivElement;
