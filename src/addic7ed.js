import addic7ed from 'addic7ed-api'
import uuid from 'node-uuid'

export default async (name, season, episode, lang) => {
  console.log(name, season, episode)
  await addic7ed.search(name, season, episode, lang)
    .then((subtitlesList) => {
      const subInfo = subtitlesList[0];
      console.log(subInfo)
    })
    .catch((err) => {
      console.log('err', err)
    })

}
