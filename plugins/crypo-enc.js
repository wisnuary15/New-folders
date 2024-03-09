import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import UglifyJS from 'uglify-js';
import CryptoJS from 'crypto-js'; // Import library crypto-js

let handler = async (m, { conn, text }) => {
  const sourceFolder = text; // Nama folder yang akan Anda kompresi

  const sourceDir = `./${sourceFolder}`;
  const tmpDir = './tmp';

  if (!fs.existsSync(sourceDir)) {
    m.reply(`Folder "${sourceFolder}" tidak ditemukan.`);
    return;
  }

  try {
    m.reply('Tunggu sebentar, sedang mengompresi dan mengenkripsi file JavaScript...');

    const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.js'));
    const encryptedFiles = [];

    for (const file of files) {
      const filePath = path.join(sourceDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { code, error } = UglifyJS.minify(fileContents);

      if (error) {
        console.error(`Terjadi kesalahan dalam mengompresi file ${file}:`, error);
        continue;
      }

      // Enkripsi kode JavaScript dengan kunci tertentu
      const encryptionKey = 'kunci_enkripsi_anda'; // Ganti dengan kunci yang lebih kuat
      const encryptedCode = CryptoJS.AES.encrypt(code, encryptionKey).toString();

      const encryptedFilePath = path.join(tmpDir, file);
      fs.writeFileSync(encryptedFilePath, encryptedCode);
      encryptedFiles.push(encryptedFilePath);
    }

    if (encryptedFiles.length === 0) {
      m.reply('Tidak ada file JavaScript yang dapat dikompresi dan dienkripsi.');
      return;
    }

    m.reply('Tunggu sebentar, sedang membuat file zip...');

    const zipFileName = `${sourceFolder}.zip`;
    const outputZipPath = path.join(tmpDir, zipFileName);

    const output = fs.createWriteStream(outputZipPath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Compression level (0-9)
    });

    archive.pipe(output);

    for (const encryptedFile of encryptedFiles) {
      archive.file(encryptedFile, { name: path.basename(encryptedFile) });
    }

    // Finalize the zip archive and close the write stream
    await archive.finalize();

    // Kirim file zip menggunakan conn.sendFile
    await conn.sendFile(m.chat, outputZipPath, zipFileName);

    // Hapus file-file yang sudah terkompresi, file zip, dan file enkripsi sementara
    for (const fileToDelete of [...encryptedFiles, outputZipPath]) {
      fs.unlinkSync(fileToDelete);
    }
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan dalam mengompresi, mengenkripsi, dan mengirim file zip');
  }
};

handler.help = ['enc <namafolder>'];
handler.tags = ['owner'];
handler.command = /^(enc)$/i
handler.rowner = true;

export default handler;