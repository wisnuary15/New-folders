import { tmpdir } from 'os'
import { join } from 'path'
import fs from 'fs'

let handler = async (m, { args, text, usedPrefix, command }) => {

	let info = `${usedPrefix + command} <Old name> | <New name>

*📌_ • Example:_*

➞ ${usedPrefix + command} inv | rpg-inv

*_🗒️ • Note:_*

Do not use the .js extension at the end of the sentence and make sure the word does not contain spaces "rpg-inv"`

if (!args[0]) throw info

if (!args[1] == "|") throw `• *📌_ • Example:_*:

➞ ${usedPrefix + command} inv | rpg-inv`

if (!args[2]) throw `• example:

➞ ${usedPrefix + command} inv | rpg-inv`

let from = args[0]

let to = args[2]

let ar = Object.keys(plugins)

let ar1 = ar.map(v => v.replace('.js', ''))

if (!ar1.includes(args[0])) return m.reply(`*🗃️ NOT FOUND!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)

await fs.renameSync(`./plugins/${from}.js`, `./plugins/${to}.js`)

conn.reply(m.chat, `Success changes "plugins/${from}.js" to "plugins/${to}.js"`, m)

}

handler.help = ['renameplugin'].map(_=> _ + " *<old name> | <new name>*")

handler.tags = ['owner']

handler.command = /^(r(ename(file)?|f)|rn)$/i
handler.owner = true
handler.mods = true

export default handler