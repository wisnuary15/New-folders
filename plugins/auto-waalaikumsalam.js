let handler = async (m, { conn }) => {
let caption = `*Waalaikummussalam Warahmatullahi Wabarokatuh*


_📚 BACA YANG DIBAWAH YA!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
`

conn.reply(m.chat, caption, m)
}
handler.customPrefix = /^(Assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i
handler.command = new RegExp

export default handler