# Getsub

## Install
### Unix and OS/X
- Fork or download this repository.
- `cd` to the project's location
- run `npm install`

## Running in development
- run `npm start`

## Running in production
- run `npm run build`


## Usage
``` js
const {search} = require('getsub-core')

const name = 'Mr.Robot.S02E07.1080p.HDTV.x264-BRISK[PRiME].mkv'
const size = 1463298106
const lang = 'eng'

search({name, size}, lang)
  .then((subtitles) => console.log(subtitles))
  .catch((err) => console.log(err))
```
