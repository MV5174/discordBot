const ytdl = require('ytdl-core');
const streamOptions = {
    seek: 0,
    volume: 1
};
let queue = [];

module.exports = async message => {
    const stream = ytdl(queue[0], { filter: 'audioonly' });
    const voiceConnection =  await voiceChannel.join();
    let voiceChannel = message.member.voiceChannel
    const dispatcher = voiceConnection.playStream(stream, streamOptions);

    dispatcher.end(); // Pause the stream
}


