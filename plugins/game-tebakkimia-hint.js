let handler = async (m, { conn }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (!(id in conn.tebakkimia)) throw false
    let json = conn.tebakkimia[id][1]
    conn.reply(m.chat, '```' + json.unsur.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hkim$/i

handler.limit = true

export default handler