const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;

export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys || !m.isGroup) return false;

  const chat = global.db.data.chats[m.chat];
  const isGroupLink = linkRegex.exec(m.text);
  const kickMessage = isAdmin
    ? `⚠️ *TAUTAN TERDETEKSI* ⚠️\nAdmin group mah bebas yekan🗿`
    : `⚠️ *TAUTAN TERDETEKSI* ⚠️\nMengirimkan link grup lain, mohon maaf kamu akan di kick oleh Bot.`;

  if (chat.antiLink && isGroupLink) {
    await this.reply(m.chat, kickMessage, null, { mentions: [m.sender] });
    await this.sendMessage(m.chat, { delete: m.key });

    if ((!isBotAdmin && isAdmin) || (isBotAdmin && !isAdmin)) {
      await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      await this.reply(m.chat, kickMessage, null, { mentions: [m.sender] });
      await this.sendMessage(m.chat, { delete: m.key });
    }
  }
  return true;
}
