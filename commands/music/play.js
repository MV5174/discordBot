// const ytdl = require('ytdl-core');
// const ytSearch = require('yt-search');
// const ffmpeg = require('ffmpeg');

// const { joinVoiceChannel } = require('@discordjs/voice');

// const queue = new Map();

// module.exports = async message => {
//         const query = message.content.split("!play")[1]

//         const voiceChannel = message.member.voiceChannelID;


//         if (!voiceChannel) return message.channel.send('You need to be in a channel to use this!');

//         //const permissions = voiceChannel.permissionsFor(message.client.user);
//         //if (!permissions.has('CONNECT')) return message.channel.send("You don't have proper permissions");
//         //if (!permissions.has('SPEAK')) return message.channel.send("You don't have proper permissions");

//         const serverQueue = queue.get(message.guild.id);

//         let song = {};

//         if (ytdl.validateURL(query)) {
//             const songInfo = await ytdl.getInfo(query)
//             song = { title: songInfo.videoDetails.title, url: songInfo.videoDetails.video_url }
//         } else {
//             const videoFinder = async (query) => {
//                 const videoResult = await ytSearch(query);
//                 return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
//             }

//             const video = await videoFinder(query)
//             if (video) {
//                 song = { title: video.title, url: video.url }
//             } else {
//                 message.channel.send('Error finding video');
//             }
//         }
//         if (!serverQueue) {
//             const queueConstructor = {
//                 voiceChannel: voiceChannel,
//                 textChannel: message.channel,
//                 connection: null,
//                 songs: []
//             }

//             queue.set(message.guild.is, queueConstructor);
//             queueConstructor.songs.push(song);

//             try {
//                 const connection = await joinVoiceChannel({
//                     channelId: message.channel.id,
//                     guildId: message.channel.guild.id,
//                 });
//                 queueConstructor.connection = connection;
//                 videoPlayer(message.guild, queueConstructor.songs[0])
//             } catch (err) {
//                 queue.delete(message.guild.id);
//                 message.channel.send('There was an error connecting');
//                 throw err
//             }
//         } else {
//             serverQueue.songs.push(song)
//             return message.channel.send('Song has been added to queue');
//         }
//     }


// const videoPlayer = async (guild, song) => {
//     const songQueue = queue.get(guild.id);

//     if (!song) {
//         songQueue.voiceChannel.leave()
//         queue.delete(guild.id);
//         return;
//     }

//     const stream = ytdl(song.url, { filter: 'audioonly' });
//     songQueue.connection.play(stream, { seek: 0, volume: 0.5 })
//         .on('finish', () => {
//             songQueue.songs.shift();
//             videoPlayer(guild, songQueue.songs[0]);
//         })
//     await songQueue.textChannel.send(`Now playing **${song.title}**`)
// }

const lib = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN });
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = async message => {
    let voiceChannel;
    voiceChannel = message.member.voiceChannelID; // Set this to the voice channel of your choice.
    let searchString;
    searchString = message.content.split(' ').slice(1).join(' ');
    console.log(message.guild.id)

    try {
        let youtubeLink;
        if (!searchString) {
            return lib.discord.channels['@0.2.0'].messages.create({
                channel_id: `${message.channel}`,
                content: `No search string provided!`,
            });
        }
        if (!searchString.includes('youtube.com')) {
            let results = await ytSearch(searchString);
            if (!results?.all?.length) {
                return lib.discord.channels['@0.2.0'].messages.create({
                    channel_id: `${message.channel}`,
                    content: `No results found for your search string. Please try a different one.`,
                });
            }
            youtubeLink = results.all[0].url;
        } else {
            youtubeLink = searchString;
        }
        console.log(ytdl.getInfo(youtubeLink));
        let downloadInfo = await ytdl.getInfo(youtubeLink);
        await lib.discord.voice['@0.0.1'].tracks.play({
            channel_id: `${voiceChannel}`,
            guild_id: `${message.guild.id}`,
            download_info: downloadInfo
        });
        return lib.discord.channels['@0.2.0'].messages.create({
            channel_id: `${message.channel}`,
            content: `Now playing **${downloadInfo.videoDetails.title}**`,
        });
    } catch (e) {
        return lib.discord.channels['@0.2.0'].messages.create({
            channel_id: `${message.channel}`,
            content: `Failed to play track!`,
        });
    }
}