const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTE0MTgxMjQzMTczMDc3MDI0.DtS0cA.-4oDTXMSHyyvPdpgC67K_czFc1I);
