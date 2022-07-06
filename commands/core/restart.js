module.exports = {
    name: 'restart',
    aliases: [''],
    utilisation: '{prefix}restart',

     execute(client, message, args) {
        const config = require('../../config');

        if(!config.app.owners.includes(message.author.id)) {
            return message.channel.send(`Only the bot owner can execute this command`)
        }
    
        message.channel.send(`Okay, I'll restart...`)
        .then(()=>client.destroy()) // <<<<
        .then(()=>client.login(client.config.app.token)) // <<<<
    },
};
    