// Hilih 
import fetch from 'node-fetch'
let handler = async (m, { conn, command: _q, usedPrefix: _p }) => {
await m.reply(md)
let res = await fetch('https://nekos.life/api/v2/img/fox_girl')
if (!res.json) throw await res.text()
let json = await res.json()
let url = json.url
if (!json.url) throw `Error, Mungkin Api Mati`
await conn.sendFile(m.chat, url, 'lah.jpg', 'Random Kaguya', m )
}
handler.help = ['foxgirl']
handler.tags = ['anime']
handler.command = /^(foxgirl)$/i
handler.register = false
handler.limit = 15

export default handler