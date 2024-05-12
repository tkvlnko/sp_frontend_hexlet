import cheerio from 'cheerio';

class Sanitizer {
sanitize(text) {
    return text.trim();
}
}


class SanitizerStripTagsDecorator {
constructor(baseSanitizer) {
    this.baseSanitizer = baseSanitizer;
}

sanitize(text) {
    const woTags = this.stripTags(text);
    return this.baseSanitizer.sanitize(woTags);
}

stripTags (tagString) {
    const $ = cheerio.load(tagString);
    return $('body').text();
};
}