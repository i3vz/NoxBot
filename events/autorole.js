module.exports = async (client) => {
    client.on('guildMemberAdd', member => {
        if(client.guilds.cache.get(config.serverid)) {
            return member.roles.add(member.guild.roles.cache.get(config.defaultroleid));
        }
    });
  };