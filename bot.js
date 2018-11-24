const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.NTE0MTgxMjQzMTczMDc3MDI0.DtS0cA.-4oDTXMSHyyvPdpgC67K_czFc1I);
