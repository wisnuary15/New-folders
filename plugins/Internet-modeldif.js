import fetch from "node-fetch"

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
text,
    args
}) => {
if (!Number(text)) return m.reply("Masukan Nomornya")
        await m.reply(wait)
        let res = await fetch('https://civitai.com/api/v1/models')
        let jso = await res.json()
        let resu = jso.items[text].modelVersions[0].images[0].meta.prompt
        await m.reply(resu)
}
handler.help = ["modeldif"]
handler.tags = ["internet"]
handler.command = /^(modeldif)$/i
export default handler