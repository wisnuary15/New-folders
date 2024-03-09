import fetch from 'node-fetch';

const handler = async (m, { text, conn }) => {
  if (!text) throw 'apa cuba';
  try {
    let wtf = await fetch(`https://xzn.wtf/api/oploverz/getdetail?url=${encodeURIComponent(text)}&apikey=mufar`);
    let fak = await wtf.json();
    let str = `Oploverz Detail\n\n`;
    str += "Title: " + fak.title + '\n';
    str += "Poster: " + fak.poster + '\n';
    str += "Status: " + fak.status + '\n';
    str += "Studio: " + fak.studio + '\n';
    str += "Released: " + fak.released + '\n';
    str += "Duration: " + fak.duration + '\n';
    str += "Season: " + fak.season + '\n';
    str += "Episodes: " + fak.episodes + '\n';
    str += "Type: " + fak.type + '\n';
    str += "Posted By: " + fak.posted_by + '\n';
    str += "Released On: " + fak.released_on + '\n';
    str += "Updated On: " + fak.updated_on + '\n';
    str += "Description: " + fak.description + '\n\n';

    str += "List Episodes:\n";
    for (let i = 0; i < fak.list_episode.length; i++) {
      let episode = fak.list_episode[i];
      str += "Episode: " + episode.episode + '\n';
      str += "Title: " + episode.title + '\n';
      str += "URL: " + episode.url + '\n';
      str += "Uploaded: " + episode.uploaded + '\n\n';
    }

    // Mengirim gambar poster
    conn.sendFile(m.chat, fak.poster, 'oploverz_poster', str, m);

  } catch (e) {
    m.reply("Maaf, Tidak Ditemukan");
  }
};

handler.help = handler.command = ['oploverzdetail'];
handler.tags = ['anime'];

export default handler;