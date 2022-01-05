const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = async message => {
    let voiceChannel = message.member.voiceChannelID; // Set this to the voice channel of your choice.

    await lib.discord.voice['@0.0.1'].tracks.pause({
        guild_id: `${message.guild.id}`
      });
      return lib.discord.channels['@0.2.0'].messages.create({
        channel_id: `${message.channel.id}`,
        content: `Song paused.`,
      });
};