//Custom Requires
//const { newGameModal } = require('../modals/newGame');

//Discord.js Requires
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { Client, Collection, Events, GatewayIntentBits, ComponentType } = require('discord.js');

//Node Requires
const wait = require('node:timers/promises').setTimeout;

//Functions
const newGameModalCreate = () => {
    // Create the modal
    const newGameModal = new ModalBuilder()
        .setCustomId('newGameModal')
        .setTitle('New Game Modal');

    // Create the text input components
    const name = new TextInputBuilder()
        .setCustomId('name')
        // The label is the prompt the user sees for this input
        .setLabel("What's your name?")
        // Short means only a single line of text
        .setStyle(TextInputStyle.Short)
        // set a default value to pre-fill the input
        .setValue('Bob')
        .setRequired(true);

    // const characterClass = new ButtonBuilder()
    //     .setCustomId('characterClass')
    //     .setLabel('New Game')
    //     .setStyle(ButtonStyle.Secondary);

    // An action row only holds one text input,
    // so you need one action row per text input.
    const firstActionRow = new ActionRowBuilder().addComponents(name);
    //const secondActionRow = new ActionRowBuilder().addComponents(characterClass);

    //TODO: Add data to character obj

    // Add inputs to the modal
    return newGameModal.addComponents(firstActionRow);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('game')
        .setDescription('Sempiternal'),
    async execute(interaction) {
        const newGame = new ButtonBuilder()
            .setCustomId('newGame')
            .setLabel('New Game')
            .setStyle(ButtonStyle.Primary);

        const loadGame = new ButtonBuilder()
            .setCustomId('loadGame')
            .setLabel('Load Game')
            .setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder()
            .addComponents(newGame, loadGame);

        const response = await interaction.reply({
            components: [row],
        });

        const collectorFilter = i => {
            i.deferUpdate();
            return i.user.id === interaction.user.id;
        };

        try {
            const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 })
                .then()

            
        }

        catch (e) {
            await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
        }
    }

}