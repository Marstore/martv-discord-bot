const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Retorna o ping do bot e outras informações.'),
  async execute(interaction) {
    const botPing = Math.round(interaction.client.ws.ping);
    const timestamp = new Date().getTime();
    const apiPing = Math.round(timestamp - interaction.createdTimestamp);

    const embed = {
       color: 0x232ac3,
       title:'🏓 Ping',
       fields: [
        { name: 'Bot', value: `${botPing}ms`, inline: true },
        { name: 'API', value: `${apiPing}ms`, inline: true }
      ]
    };

    interaction.reply({ embeds: [embed] });
  },
};
