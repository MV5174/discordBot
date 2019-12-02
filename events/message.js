const kick = require('../commands/kicks')

module.exports = (client, message) => {
    if (message.content.startsWith('!kick')) {
        return kick(message)
      }
  }