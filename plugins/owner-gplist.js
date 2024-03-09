import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
let exec = promisify(_exec).bind(cp)

let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
    await m.reply(global.wait)
    if (!isROwner) return
    if (!text) throw `uhm.. where the text?\n\nexample:\n${usedPrefix + command} lib/nas.js`
    let o
    try {
        o = await exec('ls ' + text)
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) {
            m.reply(stdout)
        } else if (stderr.trim()) {
            if (stderr.includes('No such file or directory')) {
                let path = text.substring(0, text.lastIndexOf('/'))
                let lsOutput = await exec('ls ' + path)
                let { stdout: lsStdout, stderr: lsStderr } = lsOutput
                if (lsStderr.trim()) {
                    m.reply(lsStderr)
                } else {
                    m.reply(`*🗃️ File not found!*\n==================================\n\n${lsStdout}`)
                }
            } else {
                m.reply(stderr)
            }
        }
    }
}
handler.help = ['getplugin'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(getplugin|plist)$/i
handler.rowner = true

export default handler