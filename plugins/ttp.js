import api from 'api-dylux';
import { sticker } from '../lib/sticker.js';
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw 'Teksnya mana kak?'
  try {
    const res = await api.ttp(text);
    const stiker = await sticker(false, res.result, global.packname, global.author);
    if (stiker) await conn.sendFile(m.chat, stiker, "sticker.webp", "", m);
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['ttp'].map(v => v + ' <text>');
handler.tags = ['sticker'];
handler.command = /^ttp$/i;
handler.limit = true
export default handler;
