let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) throw 'Cari apa?'
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'gimage', `
*── 「 GOOGLE IMAGE 」 ──*

${text}
➸ *width*: ${width}
➸ *height*: ${height}
`.trim(), m)
}
handler.help = ['gimage <search>']
handler.tags = ['premium']
handler.command = /^(gimage|image)$/i
handler.limit = true
handler.premium = true

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
handler.help = ['gimage <search>']
handler.tags = ['premium']
handler.command = /^(gimage|image)$/i
handler.limit = true
handler.premium = true

module.exports = handler