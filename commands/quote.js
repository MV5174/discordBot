
module.exports = message => {
    function getQuote() { //comment 
        return fetch("https://zenquotes.io/api/random")
            .then(res => {
                return res.json()
            })
            .then(data => {
                return data[0]["q"] + " -" + data[0]["a"]
            })
        
    }
    return getQuote().then(quote => message.channel.send(quote))
}