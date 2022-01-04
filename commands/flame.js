// import flame from "../arrays/flameStrings";


module.exports = message => {

    const flame =
        [
            "Ok, boomer",
            "Stop chainfeeding please",
            "Who are you again?",
            "You're going to get sent to the shadow realm if you don't stop",
            "Dude, nobody cares",
            "1v1 me bro",
            "If you don't shut the fuck up, im gonna show you the ROYGBIV",
            "We don't speak to peasants with no Motes",
            "DON'T SPEAK TO YOUR MASSA LIKE THAT",
            "No u"
        ]

    //const member = message.mentions.members.first()
    const member;
    function getUserFromMention(message) {
        if (!message) return;
    
        if (message.startsWith('<@') && message.endsWith('>')) {
            message = message.slice(2, -1);
    
            if (message.startsWith('!')) {
                message = message.slice(1);
            }
    
            return member = client.users.cache.get(message);
        }
    }
    getUserFromMention(message);

    const string = Math.floor(Math.random() * (flame.length + 1))

    if (!member) {
        return message.reply(`Who are you trying to flame? You must mention a user.`)
    }

    return message.channel
        .send(flame[string])
        .then(() => message.reply(`${member.user.tag} was flamed.`))
        .catch(error => message.reply(`Sorry, an error occured.`))
}