const kick = require('../commands/kicks')
const flame = require("../commands/flame")
const gif = require("../commands/gif")
const play = require("../commands/music/play")
const skip = require("../commands/music/skip")
const quote = require('../commands/quote')
const stop = require("../commands/music/stop")
const pause = require("../commands/music/pause")
const resume = require("../commands/music/resume")


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

    if (message.content.startsWith('!play')) {
        return play(message)
    }

    if (message.content.startsWith('!stop')) {
        return stop(message)
    }

    if (message.content.startsWith('!pause')) {
        return pause(message)
    }

    if (message.content.startsWith('!resume')) {
        return resume(message)
    }

    if (message.content === 'ping') {
        message.reply('Pong!')
    }
}