const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
        /**
         * 
         * @param {GuildMember} member
         */
    execute(member) {
        
        const { user, guild } = member;

        member.roles.add(config.defaultroleid);
    
        const Welcomer = new WebhookClient({
            id: "996116453768048640",
            token: "WtIXZ-cKWfM18sX9oD8-0B_ZVJDye1ea_F6Sw7GJXGpd0LDUl8QsX1mJqBJzRFnRQNm0",
        });

        const Welcome = new MessageEmbed()
        .setColor("AQUA")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Weclomer.send({embeds: [Welcome]})
    }
}