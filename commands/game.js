const { SlashCommandBuilder, ActionRowBuilder } = require('discord.js');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gameStart')
    .setDescription('Sempiternal'),
    async execute(interaction) {
        const confirm = new ButtonBuilder()
			.setCustomId('newGame')
			.setLabel('New Game')
			.setStyle(ButtonStyle.Primary);

		const cancel = new ButtonBuilder()
			.setCustomId('loadGame')
			.setLabel('Load Game')
			.setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder()
			.addComponents(newGame, loadGame);

            await interaction.reply({
                components: [row],
            });
    },
};