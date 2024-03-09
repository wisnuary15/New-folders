import jimp_1 from 'jimp'
import { URL_REGEX } from '@whiskeysockets/baileys'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, args }) => {
  let botNumber = await conn.user.jid
  
  let thumbnailUrls = global.ppbot; // Mengambil array dari URL ppbot dari variabel global
  
  if (Array.isArray(thumbnailUrls) && thumbnailUrls.length > 0) {
    let randomIndex = Math.floor(Math.random() * thumbnailUrls.length);
    let thumbnailUrl = thumbnailUrls[randomIndex];
    
    if (thumbnailUrl.match(URL_REGEX)) {
      let { img } = await pepe(thumbnailUrl)
      await conn.query({
        tag: 'iq',
        attrs: {
          to: botNumber,
          type: 'set',
          xmlns: 'w:profile:picture'
        },
        content: [
          {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
          }
        ]
      })
      await m.reply(`Berhasil memperbarui gambar profil bot`)
      await apivisit
    } else {
      throw 'URL thumbnail tidak valid'
    }
  } else {
    throw 'Tidak ada URL ppbot yang tersedia'
  }
}

handler.alias = handler.help = ['setppbot']
handler.tags = ['owner']
handler.command = /^bosan?$/i
handler.owner = true
export default handler

async function pepe(media) {
  const jimp = await jimp_1.read(media)
  const min = jimp.getWidth()
  const max = jimp.getHeight()
  const cropped = jimp.crop(0, 0, min, max)
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
    preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
  }
}