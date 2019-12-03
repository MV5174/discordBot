const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const streamOptions = {
    seek: 0,
    volume: 1
};
const queue = [];

module.exports = async message => {
    let args = message.content.split(" ");
    let url = args[1];
    let voiceChannel = message.member.voiceChannel

    if (ytdl.validateURL(url)) {
        console.log("valid url")
        const flag = queue.some(element => element === url);
        if (!flag) {
            queue.push(url);
            if (voiceChannel != null) {

                if (voiceChannel.connection) {
                    message.channel.send("Song has been added!")
                }

                else {
                    try {
                        const voiceConnection =  await voiceChannel.join();

                        await playSong(message.channel, voiceChannel, voiceConnection)
                    }
                    catch (error) {
                        console.log(error)
                    }
                }
            }
        }
    }
    async function playSong(messageChannel, voiceChannel, voiceConnection) {
        const stream = ytdl(queue[0], { filter: 'audioonly' });
        const dispatcher = voiceConnection.playStream(stream, streamOptions);


    }
}