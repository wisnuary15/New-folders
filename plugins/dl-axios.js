import axios from 'axios';
import fs from 'fs';
import path from 'path'; // Modul path digunakan untuk mengambil ekstensi file dari URL

const handler = async (m, { conn, text }) => {
  try {
    // Mendapatkan ekstensi file dari tautan
    const fileExtension = path.extname(text).slice(1); // Mengambil ekstensi file dari URL

    // Menggunakan waktu saat ini untuk membuat nama file unik dengan ekstensi yang sesuai
    const uniqueFilename = `${Date.now()}.${fileExtension}`;

    const startTime = Date.now();
    const response = await axios.get(text, { responseType: 'stream' });
    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000; // Waktu dalam detik
    const contentLength = response.headers['content-length'];
    const downloadSpeed = contentLength / elapsedTime; // Kecepatan unduhan dalam byte per detik


    const writer = fs.createWriteStream(uniqueFilename);
    response.data.pipe(writer);

    await new Promise((resolve) => {
      writer.on('finish', resolve);
    });


    // Menghitung ukuran file dalam byte
    const fileSizeInBytes = fs.statSync(uniqueFilename).size;

    // Mengirim informasi tentang ukuran file dan nama file yang diunduh ke pengguna
   const pesan = await conn.sendMessage(m.chat, { 
    text:`Nama file: ${uniqueFilename}\nUkuran file: ${fileSizeInBytes} bytes\n\nWaktu unduh: ${elapsedTime} detik\nKecepatan unduh: ${downloadSpeed} Bps\n\nSendang mengirim file`});

    // Mengirim file yang diunduh ke pengguna dengan ekstensi yang sesuai
    conn.sendFile(
      m.chat,
      uniqueFilename,
      null,
      'Berikut adalah file yang diunduh:',
      m,
      null,
      true
    );

setTimeout(() => { 
conn.sendMessage(m.chat, { 
delete: pesan.key }); 
}, 4000); // 3000 


    // Hapus file setelah dikirim
    fs.unlinkSync(uniqueFilename);
  } catch (error) {
    console.error('Terjadi kesalahan saat mengunduh file:', error);
    m.reply('Terjadi kesalahan saat mengunduh file.');
  }
};

handler.command = /^gett$/i; // Command untuk memicu handler, bisa disesuaikan

export default handler;