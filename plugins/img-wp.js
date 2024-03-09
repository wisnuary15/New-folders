import fg from 'api-dylux';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ query??`
  try {
    let res = await fg.wallpaper(text);
    let re = pickRandom(res);
    await conn.sendMessage(m.chat, { image: { url: re.image[0] }, caption: `` }, { quoted: m });
  } catch (error) {
   m.reply(`✳️ Error`)
  }
  
}
handler.help = ['wallpapers','wp']
handler.tags = ['img']
handler.command = ['wallpapers', 'wp']
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}