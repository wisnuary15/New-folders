const items = [
    'money', 'bank', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncommon', 'mythic', 'legendary', 'pet',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('Kamu Sedang Melakukan Transfer!')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `Gunakan Format ${usedPrefix}${command} [type] [value] [number]
Contoh ${usedPrefix}${command} money 9999 @621927237001

Transfer Item
${item.map(v => `${v}`.trim()).join('\n')}
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('Tag Salah Satu, Atau Ketik Nomernya!!')
    if (!(who in global.db.data.users)) return m.reply(`User ${who} Tidak Ada Di Dalam Database`)
    if (user[type] * 1 < count) return m.reply(`*${type}${special(type)}* Kurang Untuk Mentransfer *${count - user[type]}*`)
    let confirm = `
*––––––『 TRANSFER 』––––––*
*Item:* ${type} ${special(type)}
*Sebanyak:* ${count} 
*Ke:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}

Waktu *60* Detik

Ketik gasken Untuk Mengkonfirmasi
Ketik gajadi Untuk Membatalkan
`.trim()
    let c = wm
    conn.sendButton(m.chat, confirm, m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('Timeout'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/(gajadi️|n(o)?)/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('Reject')
    }
    if (/(gasken️|y(es)?)/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*––––『 TRANSFER 』––––*\n*Status:* Sukses\n*Item:* ${type}${special(type)}\n*Sebanyak:* ${count}\n*Ke:* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`*––––––『 TRANSFER 』––––––*\n*Status:* Gagal\n*Item:* ${count} ${type}${special(type)}\n*Ke:* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer', 'tf']
handler.tags = ['rpg']
handler.command = /^(transfer|tf)$/i

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}