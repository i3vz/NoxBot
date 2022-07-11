module.exports = {
    app: {
        px: '-',
        owners: '519503123656605699',
      mongodb: 'mongodb+srv://3vz:Iyassbilalsy1234@cluster0.e7qzf56.mongodb.net/?retryWrites=true&w=majority',
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
