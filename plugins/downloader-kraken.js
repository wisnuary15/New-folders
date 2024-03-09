import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Masukkan link.\nContoh: *.tera https://krakenfiles.com/view/jumGvugviY/file.html*';
  
  m.reply('Tunggu sebentar...');

  let url = encodeURIComponent(args[0]);
  let apiUrl = `https://xzn.wtf/api/krakendl?url=${url}&apikey=mufar`;
  
  let res = await fetch(apiUrl);
  let json = await res.json();

  if (json.status === 'ok') {
    let fileInfo = json;
    let message = `
NAMA FILE: ${fileInfo.file_name}
UKURAN FILE: ${fileInfo.file_size}
TANGGAL UNGGAH: ${fileInfo.upload_date}
TANGGAL TERAKHIR DIUNDUH: ${fileInfo.last_download_date}
TIPE FILE: ${fileInfo.type}
JUMLAH TAMPILAN: ${fileInfo.views}
JUMLAH UNDUHAN: ${fileInfo.downloads}
    `;
    await conn.reply(m.chat, message, m);

    // Periksa ukuran file sebelum mengirim
    let fileSizeInMB = parseFloat(fileInfo.file_size.split(' ')[0]);
    if (fileSizeInMB > 100) {
      throw 'Maaf, file melebihi batas ukuran yang diizinkan (100MB).';
    }

    // Mengirim file
    await conn.sendFile(m.chat, fileInfo.url, fileInfo.file_name, '', m);
  } else {
    throw 'Tidak ada informasi yang ditemukan untuk tautan yang diberikan';
  }
};

handler.help = ['kraken'];
handler.tags = ['downloader'];
handler.command = /^(kraken)$/i;
handler.limit = true;

export default handler;