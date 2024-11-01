//Custom Requires
//const { newGameModal } = require('../modals/newGame');

//Discord.js Requires
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { Client, Collection, Events, GatewayIntentBits, ComponentType } = require('discord.js');

//Node Requires
const wait = require('node:timers/promises').setTimeout;

//Functions

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription('Click a button so assign a role to yourself!'),
    async execute(interaction) {
        const mtgRole = new ButtonBuilder()
            .setCustomId('mtgRole')
            .setLabel('MTG')
            .setStyle(ButtonStyle.Primary);

        const dndRole = new ButtonBuilder()
            .setCustomId('dndRole')
            .setLabel('DnD')
            .setStyle(ButtonStyle.Secondary);

        const leagueRole = new ButtonBuilder()
            .setCustomId('leagueRole')
            .setLabel('League')
            .setStyle(ButtonStyle.Success);

        const whRole = new ButtonBuilder()
            .setCustomId('whRole')
            .setLabel('Warhammer')
            .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder()
            .addComponents(mtgRole, dndRole, leagueRole, whRole);

        const response = await interaction.reply({
            components: [row],
        });

        const collectorFilter = i => {
            // i.deferUpdate();
            return i.user.id === interaction.user.id;
        };

        try {
            const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 })

            if (confirmation.customId === 'mtgRole') {
                const guild = interaction.guild
                const role = guild.roles.cache.find(role => role.name === 'MTG');
                const member = interaction?.member
                console.log(role);
                console.log(member);
                await member.roles.add(role);
                await confirmation.update({ content: `The ${role.name} role has been given to ${member.user.globalName}`, components: [] });
            }
            if (confirmation.customId === 'dndRole') {
                const guild = interaction.guild
                const role = guild.roles.cache.find(role => role.name === 'DnD');
                const member = interaction?.member
                console.log(role);
                console.log(member);
                await member.roles.add(role);
                await confirmation.update({ content: `The ${role.name} role has been given to ${member.user.globalName}`, components: [] });
            }
            if (confirmation.customId === 'whRole') {
                const guild = interaction.guild
                const role = guild.roles.cache.find(role => role.name === 'Warhammer');
                const member = interaction?.member
                console.log(role);
                console.log(member);
                await member.roles.add(role);
                await confirmation.update({ content: `The ${role.name} role has been given to ${member.user.globalName}`, components: [] });
            }
            if (confirmation.customId === 'leagueRole') {
                const guild = interaction.guild
                const role = guild.roles.cache.find(role => role.name === 'League');
                const member = interaction?.member
                console.log(role);
                console.log(member);
                await member.roles.add(role);
                await confirmation.update({ content: `The ${role.name} role has been given to ${member.user.globalName}`, components: [] });
            }
        } catch (e) {
            await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
        }

        // Client.on(Events.InteractionCreate, async interaction => {
        // });

    }

}