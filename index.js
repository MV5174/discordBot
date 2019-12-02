const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()

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