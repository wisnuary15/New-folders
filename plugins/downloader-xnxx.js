import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 Grup ini tidak mengizinkan konten nsfw \n\nUntuk mengaktifkannya, ketik \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ Kamu belum cukup umur! Silakan kembali ketika kamu berusia di atas 18 tahun`
  if (!text) throw `✳️ Untuk mencari\n📌 Gunakan: *${usedPrefix + command} <pencarian>*\n\nUntuk mengunduh dari URL:\n📌 Gunakan: *${usedPrefix + command} <url>*`
   m.react = ('🔄')
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Masukkan link dari *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
≡  *XNXX DL*
            
▢ *📌Judul*: ${xn.result.title}
▢ *⌚Durasi*: ${xn.result.duration}
▢ *🎞️Kualitas*: ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
           m.react = ('✅')
 } catch (e) {
    m.reply(`🔴 Error: Coba lagi nanti`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Judul*: ${v.title}\n*Link*: ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Error: Coba lagi nanti`)
               }
    }
}
handler.help = ['xnxx'].map(v => v + ' <query/url>')
handler.tags = ['nsfw']
handler.command = ['xnxxsearch', 'xnxx'] 
handler.premium = false
handler.register = true

export default handler