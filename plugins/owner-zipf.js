import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('Mohon berikan nama file atau folder yang akan di-zip');
    return;
  }

  const filename = `${text}`;
  const tmpFolder = 'tmp'; // Change this to the path of your "tmp" folder

  try {
    m.reply('Tunggu sebentar, sedang membuat file zip...');

    const output = fs.createWriteStream(path.join(tmpFolder, `${filename}.zip`));
    const archive = archiver('zip', {
      zlib: { level: 9 } // Compression level (0-9)
    });

    archive.pipe(output);

    // Add the specified file or folder to the zip archive
    archive.directory(`./${filename}`, false);

    // Finalize the zip archive and close the write stream
    await archive.finalize();

    // Send the zip file using conn.sendFile
    await conn.sendFile(m.chat, path.join(tmpFolder, `${filename}.zip`), `${filename}.zip`);

    // Delete the created zip file after sending
    fs.unlinkSync(path.join(tmpFolder, `${filename}.zip`));
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan dalam membuat dan mengirim file zip');
  }
};

handler.help = ['zipf <namafile/folder>'];
handler.tags = ['owner'];
handler.command = /^(zipf)$/i;
handler.rowner = true;

export default handler;