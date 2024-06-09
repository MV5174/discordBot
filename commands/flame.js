// import flame from "../arrays/flameStrings";
//comment for the sake of pushing to heroku
const { SlashCommandBuilder } = require('discord.js');

const flame =
    [
        "Stop chainfeeding please",
        "Who are you again?",
        "You're going to get sent to the shadow realm",
        "Dude, nobody cares",
        "We don't speak to peasants with no Motes"
    ];

const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
    .setName('flame')
    .setDescription('Select a member and flame them.')
    .addUserOption(option =>
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

        await interaction.reply(`${target.username} ` + flame[string]);
        await wait(2000);
        await interaction.followUp(`${target.username} has been flamed`);
    },
};