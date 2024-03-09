let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
var messaa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ok.jpg') }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363044585298853@g.us",
"inviteCode": "k4hEiLw6EJqtj",
"inviteExpiration": `99999999999`,
"groupName": "ZYKO BOTZ MD",
"caption": `Iya Halo Bang, Kenpa?`,
"jpegThumbnail": messaa.imageMessage,
}
}), { userJid: m.chat, quoted: global.ftroli })
conn.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
handler.command = /^(Bot|HaloBot|p)$/i

export default handler