// import flame from "../arrays/flameStrings";
//comment for the sake of pushing to heroku
const { SlashCommandBuilder } = require('discord.js');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
    .setName('users')
    .setDescription('Info')
    .addUserOption(option =>
        option
            .setName('target')
            .setDescription('Member to get info')
            .setRequired(true)
        )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        console.log(target);
        await interaction.reply('Check console log');
    },
};