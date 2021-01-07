const nodeFetch = require('node-fetch');
const cheerio = require('cheerio');
const config = require('./config');
let cache = {};

module.exports = class {
    constructor (opts={}) {
        this.options = { ...config, ...opts };
    };
    async getLyrics (search, source=this.options.default) {
        if (!['azlyrics','musixmatch','lyricsfreak'].includes(source)) throw 'Not a valid lyrics source!';
        const cacheKey = source + '||' + search;
        if (cache.hasOwnProperty(cacheKey)) return cache[cacheKey];
        const conf = this.options[source];
            let connection = await nodeFetch(conf.search.url+search,{headers:{'User-Agent':this.options.useragent},timeout:this.options.timeout});
            let doc = await connection.text();
            let $ = cheerio.load(doc);
            const urlElement = $(conf.search.select).first();
            const url = urlElement.prop('href');
            console.log(url);
            connection = await nodeFetch(url,{headers:{'User-Agent':this.options.useragent},timeout:this.options.timeout});
            doc = await connection.text();
            $ = cheerio.load(doc);
            const lyrics = {
                title: $(conf.parse.title).first().text(),
                author: $(conf.parse.author).first().text(),
                content: $(conf.parse.content).first().text(),
                url: url,
                source: source
            }
            cache.cacheKey = lyrics;
            return lyrics;
    };
};
