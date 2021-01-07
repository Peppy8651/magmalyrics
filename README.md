# magmalyrics
A lyrics library for NodeJS that's easy to use and extend.  
Currently supports AZLyrics, Musixmatch, and LyricsFreak as sources.  
I don't plan to implement Genius as it tends to return incorrect results.  
Based on Jagrosh's JLyrics. Pairs well with [magmaplayer](https://github.com/redbrain/magmaplayer).
## Usage
```js
// install: npm i magmalyrics
const magmalyrics = require('magmalyrics');
const lyricsclient = new magmalyrics();
lyrics = await lyricsclient.getLyrics('heat waves');
console.log(lyrics.content); // "Sometimes all I think about is you..."
```
## Docs
- `new magmalyrics(options)` - construct a client for getting lyrics
  - options is an object. it currently supports these options:
    - `default`: default lyrics provider. The default setting of this is 'azlyrics'.
    - `timeout`: the time to wait in ms before rejecting a request. Default is 5000
    - `useragent`: the default user-agent to head requests with.  
    The default is `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0`.
- `magmalyrics.getLyrics(searchterm[, source])` - get lyrics from the client. this is async
  - `searchterm`: a string with the search term for the lyrics
  - `source`: (optional) the website to scrape the lyrics from.  
  Can be 'azlyrics', 'musixmatch', or 'lyricsfreak'.  
  If you don't use this argument, it uses the `default`
