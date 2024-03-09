import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apk Apa?`
  m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/search/playstore?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  anu = anu.data.map((v) => `*NAMA:* ${v.nama}\n*DEVELOPER:* ${v.developer}\n*RATE:* ${v.rate}\n*RATE 2:* ${v.rate2}\n*LINK:* ${v.link}\nLINKDEV: ${v.link_dev}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
}
handler.help = ['playstore']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.limit = true

export default handler