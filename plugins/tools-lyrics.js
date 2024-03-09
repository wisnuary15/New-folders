import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} hallo`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
LYRICS *${result.title}*
AUTHOR ${result.author}


${result.lyrics}


URL ${result.link}
`.trim())
}

handler.help = ['lirik'].map(v => v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler