let handler = m => m
handler.before = async function (m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(KONFIR|KONFIRM)!/i.test(m.quoted.text)) return !0
    if (!isOwner) throw false
    conn.reply(m.quoted.mentionedJid[0], '*Owner:* ' + m.text, m)
    conn.reply(m.key.remoteJid, '*Pesan dari owner:* ' + m.text, m)
}
module.exports = handler