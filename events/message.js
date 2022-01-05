const kick = require('../commands/kicks')
const flame = require("../commands/flame")
const gif = require("../commands/gif")
const music = require("../commands/music/play")
const skip = require("../commands/music/skip")
const quote = require('../commands/quote')


module.exports = (client, message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('!kick')) {
        return kick(message)
    }

    if (message.content.startsWith('!flame')) {
        return flame(message)
    }

    if (message.content.startsWith('!gif')) {
        return gif(message)
    }

    if (message.content.startsWith('!quote')) {
        return quote(message)
    }

    // if (message.content.startsWith('!play')) {
    //     return music(message)
    // }

    // if (message.content.startsWith('!skip')) {
    //     return music(message("!skip"))
    //}

    if (message.content === 'ping') {
        message.reply('Pong!')
    }
}