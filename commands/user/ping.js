const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Retorna o ping do bot.'),

  async execute(interaction) {
    const ping = interaction.client.ws.ping.toFixed(0).toLocaleString();
    
    const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Pong!')
      .setDescription(`🏓 O ping do bot é de ${ping}ms`);

    const message = await interaction.reply({ embeds: [embed] });

    if (message) {
      setTimeout(() => {
        message.delete();
      }, 5000);
    }
  },
};
