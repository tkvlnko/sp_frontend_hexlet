import HTMLElement from './HTMLElement.js';

class HTMLPairElement extends HTMLElement {
getTagName() {
    return this.name;
}

getTextContent() {
    return (this.body ?? '');
}

setTextContent(body) {
    this.body = body;
}

toString() {
    const attrLine = this.stringifyAttributes();
    const body = this.getTextContent();
    const tagName = this.getTagName();
    return `<${tagName}${attrLine}>${body}</${tagName}>`;
}
}

export default HTMLPairElement;
