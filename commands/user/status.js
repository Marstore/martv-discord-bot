const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('status do site e do bot'),

  async execute(interaction) {
    const siteUrl = 'https://martv.marstore.repl.co/home/';
    const sitePingStart = Date.now();
    const sitePingResponse = await fetch(siteUrl);
    const sitePingEnd = Date.now();
    const sitePing = sitePingEnd - sitePingStart < 5000;

    const botPingStart = Date.now();
    const botPingEnd = await interaction.client.ws.ping;
    const botPing = botPingEnd < 500;

    const embed = new MessageEmbed()
      .setColor('BLUE')
      .setTitle('STATUS MARTV')
      .setDescription(`Site: ${sitePing ? 'Online' : 'Offline'}\nBot: ${botPing ? 'Online' : 'Offline'}`);

    const message = await interaction.reply({ embeds: [embed] });

    if (message) {
      setTimeout(() => {
        message.delete();
      }, 5000);
    }
  },
};
