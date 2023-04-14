const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Retorna o ping do bot e outras informações.'),
  async execute(interaction) {
    await interaction.deferReply();

    const botPing = Math.round(interaction.client.ws.ping);
    const timestamp = new Date().getTime();
    const apiPing = Math.round(timestamp - interaction.createdTimestamp);

    const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('🏓 Ping')
      .setDescription(`Bot: ${botPing}ms\nAPI: ${apiPing}ms`);

    await interaction.editReply({ embeds: [embed] });
  },
};
