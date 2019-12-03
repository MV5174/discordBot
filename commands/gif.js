module.exports = message => {
    const query = message.content.split("!gif")[1]
    giphy.search('gifs', {'q': query})
    .then((response) => {
        const resp = response.data.length
        const respInd = Math.floor(Math.random() * (resp + 1))
        const finalResp = response.data[respInd]
        console.log(finalResp)
        message.channel.send({
            files: [finalResp.images.fixed_height.url]
        })
    })
    .catch(() => {
        message.channel.send('Error, could not find that gif')
    })
}