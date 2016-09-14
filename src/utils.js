const tvShowNamePattern = formatRegex(/(.*)((S\d\d)|(\d+X\d+))/)
const weirdPattern = formatRegex(/(\d+X\d+)/)
const seasonPattern = formatRegex(/(S\d\d)/)
const episodePattern = formatRegex(/(E\d\d)/)

function formatRegex (pattern) {
  return new RegExp(pattern, 'i')
}

export function isTvShow (name) {
  const pattern = formatRegex(/(S\d\d((E\d\dE\d\d)|(E\d\d)))|(\d+X\d+)/)
  return name.match(pattern)
}

export function extractShow (name) {

  let result = {
    name: undefined,
    showIndex: []
  }

  if (name.match(tvShowNamePattern)) {
    result.name = tvShowNamePattern.exec(name)[1]
  }

  if (name.match(weirdPattern)) {
    result.showIndex = weirdPattern.exec(name)[0].toUpperCase().split('X')
  } else {
    result.showIndex.push(seasonPattern.exec(name)[0].slice(1))
    result.showIndex.push(episodePattern.exec(name)[0].slice(1))
  }

  return result
}
