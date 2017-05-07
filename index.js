const Discord = require('discord.js');
const getJSON = require('get-json');
const bot = new Discord.Client();



bot.on("message", function(message) {

    var input = message.content;
    var channel = input.substr(0, 8);
    var streamerChannel = input.substr(9);
    var live = input.substr(0, 5);
    var streamer = input.substr(6);

    if (live === "!live") {
        getJSON(`https://api.twitch.tv/kraken/streams/${streamer}?client_id=`, function(err, res) {
            if (res.stream == null) {
                message.reply("He is currently not live");
            } else {
                message.reply("He is currently live playing " + res.stream.game);
            }
        });
    }
    if (channel === "!channel") {
        getJSON(`https://api.twitch.tv/kraken/channels/${streamerChannel}?client_id=`, function(err, res) {
            if (res.status === 404) {
                message.reply(res.message);
            } else {
                message.channel.sendMessage("Streamer: " +  res.display_name);
                message.channel.sendMessage("Stream Title: " + res.status);
                message.channel.sendMessage("Stream Url: " + res.url);
            }
        });
    }    

});
bot.login('');
