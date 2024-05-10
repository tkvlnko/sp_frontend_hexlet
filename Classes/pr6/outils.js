/* eslint-disable import/prefer-default-export */

import File from './File.js';

export const readFiles = (filepaths) => {
return filepaths.reduce((accumulator, filepath) => {
    const file = new File(filepath);
    try {
    accumulator.push(file.read());
    } catch (e) {
    accumulator.push(null);
    }
    return accumulator;
}, []);
};
