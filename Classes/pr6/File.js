import fs from 'fs';
import NotExistsError from './errors/NotExistsError.js';
import NotReadableError from './errors/NotReadableError.js';

class File {
constructor(filepath) {
    this.filepath = filepath
}
read() {
    try {
    const res = fs.readFileSync(this.filepath);
    return res;
    } catch (e) {
    if (!(fs.existsSync(this.filepath))) {
        throw new NotExistsError(); 
    } else if (!(fs.accessSync(this.filepath))) {
        throw new NotReadableError();
    }
    }
}
}

export default File;
