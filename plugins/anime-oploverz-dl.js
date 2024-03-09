import fetch from 'node-fetch';

const handler = async (m, { text, conn }) => {
  if (!text) throw 'apa cuba';
  try {
    const wtf = await fetch(`https://xzn.wtf/api/oploverzdl?url=${encodeURIComponent(text)}&apikey=mufar`);
    const fak = await wtf.json();
    let str = `Status: ${fak.status}\nTitle: ${fak.next}\n\n`;
    const a = fak.download;
    for (let i = 0; i < a.length; i++) {
      str += `*Format: ${a[i].format}*\n`;
      const b = a[i].resolutions;
      for (let j = 0; j < b.length; j++) {
        str += `Resolutions: ${b[j].name}\n`;
        const c = b[j].servers;
        for (let k = 0; k < c.length; k++) {
          str += `Servers: ${c[k].name}\n`;
          str += `URL: ${c[k].link}\n\n`;
        }
      }
    }
    conn.reply(m.chat, str, m);
  } catch (e) {
    conn.reply(m.chat, "Maaf, tidak ditemukan", m);
  }
};

handler.help = handler.command = ['oploverzdl'];
handler.tags = ['anime'];

export default handler;