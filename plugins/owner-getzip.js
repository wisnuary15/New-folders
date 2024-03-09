import fs from 'fs';

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('Mohon berikan nama file yang akan diambil');
    return;
  }

  const filename = `${text}`;

  try {
    m.reply('Tunggu sebentar, sedang mengambil file database');
    const sesi = await fs.promises.readFile(`./${filename}`);
    await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/octet-stream', fileName: filename }, { quoted: m });
  } catch (error) {
    console.log(error);
    m.reply('Terjadi kesalahan dalam mengambil file database');
  }
};

handler.help = ['getzip <namafile>'];
handler.tags = ['owner'];
handler.command = /^(getzip)$/i;
handler.rowner = true;

export default handler;