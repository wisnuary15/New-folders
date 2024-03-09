import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let res = await fetch(`https://xyroinee-apis.claraaaaaaa1909.repl.co/api/anime/nekopoi?apikey=wiWISTatY8`)
	let anu = await res.json()
	const bkp = conn.sendFile(m.chat, anu.data, 'wikwik.mp4', '_Jangan Coli Ya..._', m)
} 
handler.command = /^(bkp)$/i
handler.tags = ['random']
handler.help = ['bkp']
handler.premium = true
export default handler