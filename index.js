const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
require('dotenv').config()

//reads the files and fires their eventHandlers
fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, arg => eventHandler(client, arg))
    })
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!')
    }
})

client.on('guildMemberAdd', member => {
    member.send(
        `Welcome to the server! Don't be a dick, have fun!`
    )
})

client.login(process.env.BOT_TOKEN)