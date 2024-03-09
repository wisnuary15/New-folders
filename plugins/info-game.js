import { readFileSync } from 'fs'
let handler = async (m, {conn, command, args, usedPrefix}) => {
let ktnya = ['\n\n\n' + htjava + ' Mungkin menu ini bermanfaat? ' + htjava,
 '\n\n\n' + htjava + ' Terimakasih sudah menggunakan bot ini ' + htjava,
 '\n\n\n' + htjava + ' Semoga gak erorr ' + htjava,
 '\n\n\n' + htjava + ' Jika lama kemungkiman erorr atau delay ' + htjava,
 '\n\n\n' + htjava + ' Menampilkan menu ' + htjava,
 '\n\n\n' + htjava + ' Wait... ' + htjava,
 '\n\n\n' + htjava + ' Dua tiga kucing berlari ' + htjava,
 '\n\n\n' + htjava + ' Bentar bang akan kutampilkan menunya ' + htjava,
 '\n\n\n' + htjava + ' Prosess... ' + htjava]
let ktx = ktnya.getRandom()
const tekss = `${htki} RPG GAME ${htka}
	    ${emojis} adventure => ${usedPrefix}adventure
	    ${emojis} bansos => ${usedPrefix}bansos
	    ${emojis} buy => ${usedPrefix}buy
	    ${emojis} berburu => ${usedPrefix}berburu
	    ${emojis} berdagang => ${usedPrefix}berdagang
	    ${emojis} berkebon => ${usedPrefix}berkebon
	    ${emojis} bet => ${usedPrefix}bet
	    ${emojis} build => ${usedPrefix}build
	    ${emojis} casino => ${usedPrefix}casino
	    ${emojis} cek => ${usedPrefix}cek
	    ${emojis} chop => ${usedPrefix}chop
	    ${emojis} collect => ${usedPrefix}collect
	    ${emojis} cook => ${usedPrefix}cook
	    ${emojis} cooldown => ${usedPrefix}cooldown
	    ${emojis} craft => ${usedPrefix}craft
	    ${emojis} daily => ${usedPrefix}daily
	    ${emojis} duel => ${usedPrefix}duel
	    ${emojis} dungeon => ${usedPrefix}dungeon
	    ${emojis} eat => ${usedPrefix}eat
	    ${emojis} feed => ${usedPrefix}feed
	    ${emojis} heal => ${usedPrefix}heal
	    ${emojis} hourly => ${usedPrefix}hourly
	    ${emojis} hunt => ${usedPrefix}hunt
	    ${emojis} inventory => ${usedPrefix}inventory
	    ${emojis} kandang => ${usedPrefix}kandang
	    ${emojis} kerja => ${usedPrefix}kerja
	    ${emojis} koboy => ${usedPrefix}koboy
	    ${emojis} kolam => ${usedPrefix}kolam
	    ${emojis} leaderboard => ${usedPrefix}leaderboard
	    ${emojis} mancing => ${usedPrefix}mancing
	    ${emojis} mentransfer => ${usedPrefix}mentransfer
	    ${emojis} merampok => ${usedPrefix}merampok
	    ${emojis} mining => ${usedPrefix}mining
	    ${emojis} mission => ${usedPrefix}mission
	    ${emojis} monthly => ${usedPrefix}monthly
	    ${emojis} nabung => ${usedPrefix}nabung
	    ${emojis} nambang => ${usedPrefix}nambang
	    ${emojis} nebang => ${usedPrefix}nebang
	    ${emojis} ngocok => ${usedPrefix}ngocok
	    ${emojis} nguli => ${usedPrefix}nguli
	    ${emojis} ojek => ${usedPrefix}ojek
	    ${emojis} open-crate => ${usedPrefix}opencrate
	    ${emojis} open => ${usedPrefix}open
	    ${emojis} pasar => ${usedPrefix}pasar
	    ${emojis} petstore => ${usedPrefix}petstore
	    ${emojis} pointxp => ${usedPrefix}pointxp
	    ${emojis} profile => ${usedPrefix}profile
	    ${emojis} ramuan => ${usedPrefix}ramuan
	    ${emojis} repair => ${usedPrefix}repair
	    ${emojis} rob => ${usedPrefix}rob
	    ${emojis} roket => ${usedPrefix}roket
	    ${emojis} sell => ${usedPrefix}sell
	    ${emojis} shopfish => ${usedPrefix}shopfish
	    ${emojis} shop => ${usedPrefix}shop
	    ${emojis} slect-skill => ${usedPrefix}slectskill
	    ${emojis} slot => ${usedPrefix}slot
	    ${emojis} tarik => ${usedPrefix}tarik
	    ${emojis} taxy => ${usedPrefix}taxy
	    ${emojis} toko => ${usedPrefix}toko
	    ${emojis} transfer => ${usedPrefix}transfer
	    ${emojis} upgrade => ${usedPrefix}upgrade
	    ${emojis} use => ${usedPrefix}use
	    ${emojis} weekly => ${usedPrefix}weekly
	    ${emojis} work => ${usedPrefix}work`
const listMessage = {
  text: tekss,
  footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
  
}
  	return conn.sendMessage(m.chat, listMessage, {quoted: fakes})
                }
///AKSJDDJ
handler.help = ['game']
handler.tags = ['rpg']
handler.command = /^gam(es|ing|e)$/i 

export default handler