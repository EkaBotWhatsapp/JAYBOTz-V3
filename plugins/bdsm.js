let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/nsfw/bdsm?apikey=QyF3VhyE', 'bspm.jpg', 'βΏππ₯πππ§π’π₯β’πππ¬ππ’π§π\nnih bdsmnya kak\nPremium : https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['bdsm']
handler.tags = ['premium']

handler.command = /^(bd|sm|bdsm)$/i

handler.premium = true
handler.private = false
handler.limit = 1
module.exports = handler


