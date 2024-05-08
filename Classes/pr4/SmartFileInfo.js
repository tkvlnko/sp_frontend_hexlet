import FileInfo from './FileInfo.js';

class SmartFileInfo extends FileInfo {
  getSize(type='') {
  if (type !== 'b' && type !== 'kb' && type !== '') {
    throw Error;
  } else {
    const t = (type === 'b' || type === '') ? super.getSize() : super.getSize() / 1024;
    return t;
  }
}
}

export default SmartFileInfo;
