
    let fkontak = {

        key: {

            participant: Parti,

            remoteJid: Remot

        },

        message: {

            contactMessage: {

                displayName: Sarapan,

                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${Sarapan},;;;\nFN:${Sarapan},\nitem1.TEL;waid=${nomorown.split("@")[0]}:${nomorown.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,

                jpegThumbnail: thumbnailUrl,

                thumbnail: thumbnailUrl,

                sendEphemeral: true

            }

        }

    }

