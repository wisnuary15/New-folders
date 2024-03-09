import axios from 'axios';
import { pickRandom } from '../lib/other-function.js'
import fetch from 'node-fetch'
let handler = async (m) => {
  let videoUrls = [
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿",
"HAYO LAGI CARI APA? GAMAU AH DOSA🗿"
]

if (m.isGroup) {
  m.reply('Video akan dikirim di private chat');
} else {}
let angka = ['800000','200000','900000','77520000']
let gede = pickRandom(angka)
const pesan = await conn.sendMessage(m.sender, { text: wait })
setTimeout(() => { conn.sendMessage(m.sender, { delete: pesan.key }); }, 4000); // 3000 
let video = pickRandom(videoUrls)
let poto = pickRandom(global.AraChu2)
   const pidio = await conn.sendMessage(m.sender, {
    video: { url: video },
    fileLength: 1,
    caption: 'video akan otomatis di hapus dalam 15 menit',
    }, { quoted: m,ephemeralExpiration: 86400});
setTimeout(() => { conn.sendMessage(m.chat, { delete: pidio.key }); }, 900000); // 3000 
}

handler.help = handler.command = ['prasy suga'];
handler.tags = ['asupan']
handler.premium = true
export default handler;