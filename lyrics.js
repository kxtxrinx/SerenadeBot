const getLyrics = require("./getLyrics")
const getSong = require("./getSong")
const options={
    apiKey: 'FZ4VnkFWRgVwXZirntXvEOo2DKIRgySVVZ_DfCAzUWWk8nN4ggP9lo445dZoOblK',
    title: '505',
    artist: 'Arctic Monkeys',
    optimizeQuery: true
}
getLyrics(options).then((lyrics)=>console.log(lyrics))
//getSong(options).then((song)=>console.log(song.lyrics))