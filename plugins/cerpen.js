import fetch from "node-fetch";
import api from "dhn-api"
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let f = await api.Cerpen(text)
m.reply(f)
}
handler.help = ['cerpen']
handler.tags = ['cerpen']
handler.command = /^(cerpen)$/i;
export default handler;