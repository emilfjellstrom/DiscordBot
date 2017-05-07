const commando = require('discord.js-commando');

class TwitchCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'info',
            group: 'twitch',
            memberName: 'info',
            description: 'Streamer info'
        });
    }

    async run(){
        
    }
}


module.exports = TwitchCommand;

