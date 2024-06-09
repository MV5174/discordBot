const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');

module.exports = {

    newGameModal: () => {
        // Create the text input components
        const name = new TextInputBuilder()
            .setCustomId('name')
            // The label is the prompt the user sees for this input
            .setLabel("What's your name?")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short)
            // set a default value to pre-fill the input
            .setValue('Bob');

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
        return modal.addComponents(firstActionRow);

    }
};