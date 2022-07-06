module.exports = {
    app: {
        px: '-',
        token: 'NzE3Mzg1MDk1NTQ3MTkxMzE4.GwdCw-.equc5b7WmQ6opyknKpoGJltolNjdUjvuxEQR3Q',
        owners: '519503123656605699',
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
