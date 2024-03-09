let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	
    let tee = `✳️ masukkan text\n\n📌 Example : *${usedPrefix + command}* mufar`
    let too = `✳️ pisah text dengan *+* \n\n📌 Example: \n*${usedPrefix + command}* mufar *+* OnLasdan`
    m.reply(wait)
 let type = (command).toLowerCase()
 switch (type) {
   
     case 'logololi':
     if (!text) throw tee 
     let img = global.API('fgmods', '/api/maker/loli', { text }, 'apikey')
     conn.sendFile(m.chat, img, 'logo.png', `✅ result`, m)
     
     break 
     case 'neon': 
     if (!text) throw tee
     let ne = global.API('fgmods', '/api/textpro/neon', { text }, 'apikey')
     conn.sendFile(m.chat, ne, 'logo.png', `✅ result`, m)
     
     break 
     case 'devil': 
     if (!text) throw tee
     let de = global.API('fgmods', '/api/textpro/devil', { text }, 'apikey')
     conn.sendFile(m.chat, de, 'logo.png', `✅ result`, m)
     
     break 
     case 'wolf': 
    if (!text) throw tee
    let wo = global.API('fgmods', '/api/textpro/logowolf', { text: 'FG98', text2: text}, 'apikey')
     conn.sendFile(m.chat, wo, 'logo.png', `✅ result`, m)
     
     break 
     case 'phlogo': 
     if (!text) throw too
     if (!text.includes('+')) throw too  
     let [a, b] = text.split`+`   
     let ph = global.API('fgmods', '/api/textpro/pornhub', { text: a, text2: b}, 'apikey')
     conn.sendFile(m.chat, ph, 'logo.png', `✅ result`, m)
     break 
     default:
 } 
 } 
 handler.help = ['logololi', 'neon2', 'devil', 'wolf', 'phlogo']
 handler.tags = ['maker']
 handler.command = /^(logololi|neon2|devil|wolf|phlogo)$/i
 
 export default handler