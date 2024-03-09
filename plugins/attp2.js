import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Mᴀꜱᴜᴋᴋᴀɴ Tᴇxᴛ!'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/ttp2?apikey=haikalgans&text=${response[0]}&apikey=Xynoz`
  conn.sendFile(m.chat, res, 'xynz.webp', `Sᴜᴅᴀʜ Jᴀᴅɪ >•<`, m, false)
}
handler.help = ['attp2 <text>']
handler.tags = ['sticker' , 'premium']
handler.command = /^(attp2)$/i
handler.limit = true
handler.premium = true

export default handler