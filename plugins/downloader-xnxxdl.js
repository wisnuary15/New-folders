import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Link nya mana?\nContoh: *.xnxx https://www.xnxx.com/video-snwh152/bokep_indonesia_panlok_amoy_cantik';
  
  m.reply('Tunggu sebentar...');

  let url = encodeURIComponent(args[0]);
  let apiUrl = `https://xzn.wtf/api/xnxxdl?urlxnxx=${url}&apikey=mufar`;
  
  let res = await fetch(apiUrl);
  let json = await res.json();

  if (json.title) {
    let message = `
Judul: ${json.title}
Durasi: ${json.duration}
Kualitas: ${json.quality}
Jumlah Views: ${json.views}
URL: ${json.url}
    `;

    // Mengirim gambar pratinjau sebagai thumbnail pesan
    await conn.sendFile(m.chat, json.thumb, 'thumbnail.jpg', message, m);

    // Mengirim hasil unduhan URL sebagai file
    await conn.sendFile(m.chat, json.url, 'video.mp4', '', m);
  } else {
    throw 'Tidak ada informasi yang ditemukan';
  }
};

handler.help = ['xnxxdl'];
handler.tags = ['downloader'];
handler.command = /^(xnxxdl)$/i;
handler.limit = true;

export default handler;