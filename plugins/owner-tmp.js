import fs from 'fs';

let handler = async (m, { usedPrefix, command }) => {
    // Periksa apakah perintah adalah 'kn'
    if (command === 'tmp') {
        // Nama direktori yang akan dibuat
        const tmpDir = 'tmp';

        try {
            // Buat direktori 'tmp'
            await fs.promises.mkdir(tmpDir, { recursive: true });
            
            // Set izin direktori 'tmp' menjadi 777
            await fs.promises.chmod(tmpDir, 0o777);
            
            m.reply('Direktori "tmp" berhasil dibuat dengan izin 777');
        } catch (error) {
            throw `Gagal membuat direktori 'tmp': ${error.message}`;
        }
    } else {
        // Handle perintah atau pesan lain di sini sesuai kebutuhan
        // ...
    }
}

handler.command = /^(tmp)$/i

handler.rowner = true

export default handler
