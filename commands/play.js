const { SlashCommandBuilder } = require('discord.js');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { SpotifyPlugin } = require('@distube/spotify');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Select a song and play it.')
        .addStringOption(option =>
            option
                .setName('song')
                .setDescription('The song to play')
                .setRequired(true)
        ),
    async execute(interaction, distube) {

        const voiceChannel = interaction.member?.voice?.channel;
        const song = interaction.options.getString('song');
        if (voiceChannel) {
            distube.play(voiceChannel, song, {
                interaction,
                textChannel: interaction.channel,
                member: interaction.member,
            });
        } else {
            interaction.channel.send(
                'You must join a voice channel first.',
            );
        }
    }
};