module.exports = {
    default: 'azlyrics',
    timeout: 5000,
    useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.74 Safari/537.36 Edg/79.0.309.43',
    azlyrics: {
        search: {
            url: 'https://search.azlyrics.com/search.php?q=',
            select: 'a[href*=\\/lyrics\\/]'
        },
        parse: {
            title: 'div.ringtone ~ b',
            author: 'div.lyricsh b',
            content: 'div.ringtone ~ div'
        }
    },
    musixmatch: {
        search: {
            url: 'https://www.musixmatch.com/search/',
            select: 'a.title[href*=\\/lyrics\\/]'
        },
        parse: {
            title: 'h1',
            author: 'h2 span a',
            content: 'div.mxm-lyrics > span'
        }
    },
    lyricsfreak: {
        search: {
            url: 'https://www.lyricsfreak.com/search.php?q=',
            select: 'a.song[href*=.html]'
        },
        parse: {
            title: 'div#breadcrumb span > span[itemprop=title]',
            author: 'h2.lyric-song-head a',
            content: 'div#content'
        }
    }
};
