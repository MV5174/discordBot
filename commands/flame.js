// import flame from "../arrays/flameStrings";
//comment for the sake of pushing to heroku
const { SlashCommandBuilder } = require('discord.js');

// module.exports = message => {

//     const flame =
//         [
//             "Ok, boomer",
//             "Stop chainfeeding please",
//             "Who are you again?",
//             "You're going to get sent to the shadow realm if you don't stop",
//             "Dude, nobody cares",
//             "1v1 me bro",
//             "If you don't shut the fuck up, im gonna show you the ROYGBIV",
//             "We don't speak to peasants with no Motes",
//             "DON'T SPEAK TO YOUR MASSA LIKE THAT",
//             "No u"
//         ]

//     const member = message.mentions.users.first();

//     const string = Math.floor(Math.random() * (flame.length + 1))

//     if (!member) {
//         return message.reply(`Who are you trying to flame? You must mention a user.`)
//     }

//     return message.channel
//         .send(flame[string])
//         .then(() => message.reply(`${member} was flamed.`))
//         .catch(error => message.reply(`Sorry, an error occured.`))
// }
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
        "No u"
    ];

const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('flame')
    .setDescription('Select a member and flame them.')
    .addStringOption(option =>
        option
            .setName('target')
            .setDescription('The member to flame')
            .setRequired(true)
        ),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const string = Math.floor(Math.random() * (flame.length + 1));
        console.log(target.username);
        console.log(interaction.toJSON());

        await interaction.reply(`<@${target.username}> ` + flame[string]);
        await wait(2000);
        await interaction.followUp(`${target.username} has been flamed`);
    },
};