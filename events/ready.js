module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);

    setInterval(() => {
        const statuses = [
          `-Help`,
          `Coded by 3vz`,
          `Im Nox :D`,
          `v4.0`
        ]
    
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: 'STREAMING', url: 'https://twitch.tv/Nox' })
        }, 5000)
  };