import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')


let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/avatar_contact.png')


conn.sendMessage(m.chat, {
      text: sn,
      contextInfo: {
      externalAdReply: {
      title: botdate,
      body: `ファイル ・「ムファル」`,
      thumbnailUrl: pp,
      sourceUrl: sig,
      mediaType: 1,
      renderLargerThumbnail: true
      }}},{ quoted: m })
}
handler.help = ['ceksn']
handler.tags = ['main']
handler.command = /^(ceksn)$/i
handler.register = true
export default handler
