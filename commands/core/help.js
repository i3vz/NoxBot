const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed()
            .setColor('#ffd046')
            .setTitle('Server Commands List')
            .setDescription('Here you can see the list of the commands used on the server: ')
            
            const commands = client.commands.filter(x => x.showHelp !== false);

            embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

            message.channel.send({ embeds: [embed] });
    },
};