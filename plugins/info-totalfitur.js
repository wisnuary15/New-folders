let mufar = async (m, { conn }) => {
  let totalfi = Object.keys(global.plugins)
    .filter(plugin => !plugin.disabled)
    .map(plugin => {
      const helpArray = Array.isArray(global.plugins[plugin].help)
        ? global.plugins[plugin].help
        : [global.plugins[plugin].help];

      return {
        help: helpArray,
        helpCount: helpArray.length
      };
    })
    .sort((a, b) => b.helpCount - a.helpCount) // Sort in descending order based on helpCount
    .reduce((total, plugin) => total + plugin.helpCount, 0);

  const tagCount = {}; // Tambahkan ini untuk mendefinisikan variabel tagCount

  let totalf = Object.keys(global.plugins)
    .filter(plugin => !plugin.disabled)
    .map(plugin => {
      const tagsArray = Array.isArray(global.plugins[plugin].tags)
        ? global.plugins[plugin].tags
        : [global.plugins[plugin].tags];

      // Loop melalui setiap tag dalam plugin
      tagsArray.forEach(tag => {
        if (tagCount[tag]) {
          // Jika tag sudah ada, tambahkan 1 ke jumlahnya
          tagCount[tag]++;
        } else {
          // Jika tag belum ada, inisialisasi dengan 1
          tagCount[tag] = 1;
        }
      });

      return {
        tags: tagsArray,
        tagsCount: tagsArray.length
      };
    });

  const tagList = Object.keys(tagCount)
    .sort((a, b) => tagCount[b] - tagCount[a]) // Sort tags in descending order based on counts
    .map(tag => `\n⭔ *${tag}:* ${tagCount[tag]} fitur`).join('');
  conn.sendMessage(m.chat, { text: `*「 FRACTION LIST 」*\n\n ${tagList}\n\n*TOTAL FITUR:${totalfi} Commands.*`, contextInfo: { externalAdReply: { title: wm, body: bottime, mediaType: 1, thumbnailUrl: 'https://telegra.ph/file/574a8490479e528a381c8.jpg', sourceUrl: 'https://PrasyGanteng.co.id', renderLargerThumbnail: true } } }, { quoted: m, ephemeralExpiration: global.ephemeral })
}

mufar.help = ['totalfitur']
mufar.tags = ['info']
mufar.command = ['totalfitur']
export default mufar