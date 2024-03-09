import fetch from 'node-fetch'

let timeout = 120000
let poin = 49999
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0])
        throw false
    }
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ao untuk bantuan
Bonus: ${poin} XP

*Note : Reply Pesan Ini Jika Ingin Menjawab Soal*
`.trim()
    conn.asahotak[id] = [
  //      await conn.reply(m.chat, caption, m),
        await conn.sendButton(m.chat, caption, wm, null, [['Bantuan', '.ao']], m),
        json, poin,
        setTimeout(() => {
           if (conn.asahotak[id]) conn.sendButton(m.chat, `Waktu Habis!\nJawabannya Adalah: *${json.jawaban}*`, wm, null, [['Asah Otak', '.asahotak']], conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.limit = true
handler.group = false

export default handler