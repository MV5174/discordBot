const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
require('dotenv').config()
var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(process.env.giphy_token)

//reads the files and fires their eventHandlers
fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, arg => eventHandler(client, arg))
    })
})


client.login(process.env.BOT_TOKEN)