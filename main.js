const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const guildDB = require("./mongo/guildDB");
const db = require("quick.db");

const express = require('express')
const app = express();
const port = 3000
 
app.get('/', (req, res) => res.send('Bot is now running!!'))
 
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');
require("dotenv").config();
require("./database.js");

client.login(process.env.token);