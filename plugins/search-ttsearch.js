import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Masukkan link TikTok.';
  
  m.reply('Tunggu sebentar...');

  let apiUrl = `https://xzn.wtf/api/ttsearch?search=${encodeURIComponent(args[0])}&apikey=mufar`;
  
  let res = await fetch(apiUrl);
  let json = await res.json();

  if (json) {
    let message = `
Video ID: ${json.video_id}
Region: ${json.region}
Judul: ${json.title}
Cover: ${json.cover}
Durasi: ${json.duration} detik
Putar: ${json.play}
Watermarked: ${json.wmplay}
Musik: ${json.music}
Jumlah Putar: ${json.play_count}
Jumlah Digg: ${json.digg_count}
Jumlah Komentar: ${json.comment_count}
Jumlah Bagikan: ${json.share_count}
Jumlah Unduh: ${json.download_count}
Tanggal Pembuatan: ${json.create_time}
Penulis:
  ID: ${json.author.id}
  Unique ID: ${json.author.unique_id}
  Nama Pengguna: ${json.author.nickname}
  Avatar: ${json.author.avatar}
    `;
    await conn.reply(m.chat, message, m);
  } else {
    throw 'Tidak ada hasil yang ditemukan';
  }
};

handler.help = ['ttsearch'];
handler.tags = ['search'];
handler.command = /^(ttsearch)$/i;
handler.limit = true;

export default handler;