module.exports = message => {
    const member = message.mentions.members.first()
  
    if (!member) {
      return message.reply(`Who are you trying to kick? You must mention a user.`)
    }
  
    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }

    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
      return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
    }
    else {
      return message.reply(`You don't have the permissions to do so, sorry loser`)
    }
    
  }