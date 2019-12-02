const kick = require('../commands/kicks')
const flame = require("../commands/flame")

module.exports = (client, message) => {
    if (message.content.startsWith('!kick')) {
        return kick(message)
    }

    if (message.content.startsWith('!flame')) {
        return 
    }

    if (message.content === 'ping') {
        message.reply('Pong!')
    }
}