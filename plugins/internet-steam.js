import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Masukkan kata kunci untuk pencarian Steam.';
  
  m.reply('Tunggu sebentar...');
  
  let query = encodeURIComponent(args[0]);
  let apiUrl = `https://ll--lasdanon.repl.co/api/search/steam?q=${query}&apikey=Onlasdan`;
  
  let res = await fetch(apiUrl);
  let json = await res.json();

  if (json.status === 'Success' && json.data && json.data.length > 0) {
    let game = json.data[0];
    let message = `
Nama Game: ${game.judul}
Harga: ${game.harga}
Tanggal Rilis: ${game.rilis}
Rating: ${game.rating}
Link: ${game.link}
    `;
    
    await conn.sendFile(m.chat, game.img, 'preview.jpg', message, m);
  } else {
    throw 'Tidak ada hasil pencarian yang ditemukan';
  }
};

handler.help = ['steam'];
handler.tags = ['internet];
handler.command = /^(steam)$/i;
handler.limit = true;

export default handler;