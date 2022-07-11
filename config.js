module.exports = {
    app: {
        px: '-',
        owners: '519503123656605699',
<<<<<<< Updated upstream
      mongodb: 'mongodb+srv://3vz:Iyassbilalsy1234@cluster0.e7qzf56.mongodb.net/?retryWrites=true&w=majority',
=======
        serverid: '613504635956887562',
        defaultroleid: '938119043855040522',
>>>>>>> Stashed changes
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
