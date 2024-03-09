import { wallpaper } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Contoh: ${usedPrefix}${command} Minecraft`
    const res = await wallpaper(text)
    const img = res[Math.floor(Math.random() * res.length)]
    conn.sendFile(m.chat, img, 'wallpaper.jpg', `RESULT FROM *${text}*`, m)
}
handler.help = ['wallpaper' + ' <pencarian>']
handler.tags = ['downloader']

handler.command = /^(wallpaper)$/i

export default handler