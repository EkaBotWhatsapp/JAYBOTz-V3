let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/mangayutri?apikey=QyF3VhyE', 'mangayutri.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['mangayutri']
handler.tags = ['asupan']

handler.command = /^(mangayutri)$/i
handler.register = true
handler.limit = 1
module.exports = handler