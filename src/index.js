/* API(s) */
import Fuse from 'fuse.js'
import opensubtitle from './opensubtitle'

/**
 * Getsub Search API
 *
 * @param {Object} File object containing our file path and name
 * @param {String} Search language filter
 * @return {Object} Resulted search object (with subtitles list and origin names)
 */
export const search = async (file, lang) => {
  const originName = file.name
  let subtitles = await opensubtitle(originName, file.size, lang)

  /**
   * We use Fuse (https://github.com/krisk/Fuse)
   * to comparing the file name with our list of
   * subtitles found.
   *
   * @return {Array} A new array sorted by score
   */
  const fuse = new Fuse(subtitles, {
    caseSensitive: false,
    includeScore: false,
    shouldSort: true,
    tokenize: false,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: originName.length + 8,
    keys: ['fileName']
  })

  return {
    subtitles: fuse.search(originName),
    originLang: lang,
    originName
  }
}
