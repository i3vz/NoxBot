const Discord = require('discord.js')

module.exports = {
    name: 'uptime',
    aliases: [],
    utilisation: '{prefix}uptime',
     execute(client, message, args) {

        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds.`
            }
            message.channel.send(`I have been online for : ${duration(client.uptime)}`)
            }
        };