const {search} = require('../lib/getsub-core.js')

const name = 'Mr.Robot.S02E07.1080p.HDTV.x264-BRISK[PRiME].mkv'
const size = 1463298106
const lang = 'eng'

search({name, size}, lang)
  .then((subtitles) => console.log(subtitles))
  .catch((err) => console.log(err))
