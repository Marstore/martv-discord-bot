const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Exibe o avatar de um usuário')
    .addUserOption(option =>
      option.setName('usuário')
        .setDescription('O usuário que você quer ver o avatar')
        .setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('usuário') || interaction.user;
    const avatarUrl = user.displayAvatarURL({ dynamic: true, size: 4096 });

    const embed = new MessageEmbed()
      .setColor(0x232ac3)
      .setTitle(`${user.username}'s avatar`)
      .setImage(avatarUrl);

    await interaction.reply({ embeds: [embed] });
  },
};
