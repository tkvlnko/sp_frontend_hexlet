export default class HTMLElement {
    constructor(attributes = {}) {
      this.attributes = attributes;
    }
  
    stringifyAttributes() {
      let res = '';
      for (const [key, value] of Object.entries(this.attributes)) {
  
      res = res.concat(" ", `${key}="${value}"`);
    }
        return res;
    }
  }
  
  