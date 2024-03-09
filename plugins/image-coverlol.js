import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Masukkan teks.\nContoh: *.cover Skizo || Team*';

  m.reply('Tunggu sebentar...');

  let text = encodeURIComponent(args.join(' '));
  let apiUrl = `https://xzn.wtf/api/cover-lol?text=${text}&apikey=mufar`;

  let res = await fetch(apiUrl);
  let buffer = await res.buffer(); // Convert the response to buffer

  if (buffer && buffer.length > 0) {
    await conn.sendFile(m.chat, buffer, 'cover-lol.jpg', '', m, false, { mimetype: 'image/jpeg' });
  } else {
    throw 'Tidak ada gambar yang ditemukan';
  }
};

handler.help = ['coverlol'];
handler.tags = ['image'];
handler.command = /^(coverlol)$/i;
handler.limit = true;

export default handler;