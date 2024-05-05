import HTMLElement from './HTMLElement.js';

export default class HTMLHrElement extends HTMLElement{

  toString() {
    const attrLine = this.stringifyAttributes();
    return `<hr${attrLine}>`;
  }
}
