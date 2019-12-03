const kick = require('../commands/kicks')
const flame = require("../commands/flame")
const gif = require("../commands/gif")

module.exports = (client, message) => {
    if (message.content.startsWith('!kick')) {
        return kick(message)
    }

    if (message.content.startsWith('!flame')) {
        return flame(message)
    }

    if (message.content.startsWith('!gif')) {
        return gif(message)
    }

    if (message.content === 'ping') {
        message.reply('Pong!')
    }
}