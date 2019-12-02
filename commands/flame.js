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
            "DON'T SPEAK TO YOUR MASSA LIKE THAT"
        ]
    const member = message.mentions.members.first()

    const string = Math.floor(Math.random() * flame.length)

    if (!member) {
        return message.reply(`Who are you trying to kick? You must mention a user.`)
    }

    return member
        .reply(flame[string])
}