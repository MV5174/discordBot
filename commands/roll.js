const { SlashCommandBuilder } = require('discord.js');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Rolls a d6, d8, d10, d12, d20, or a d100')
    .addStringOption(option =>
        option
            .setName('dice')
            .setDescription('The dice to roll')
            .setRequired(true)
        ),
    async execute(interaction) {
        const dice = interaction.options.getString('dice');
        const slicedDice = dice.slice(1,4);
        console.log(slicedDice);
        const diceRoll = Math.floor(Math.random() * (slicedDice - 1 + 1) + 1);
        console.log(interaction.toJSON());

        await interaction.reply(`Rolling ${dice}...`);
        await wait(2000);
        await interaction.followUp(`${diceRoll}!`);
    },
};