const { SlashCommandBuilder } = require('@discordjs/builders');
const { exec } = require('child_process');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rr')
    .setDescription('Reinicia o bot.')
    .setDefaultPermission(false),
  async execute(interaction) {
    const userId = '670558767963701248';
    if (interaction.user.id !== userId) {
      return interaction.reply('Você não tem permissão para executar este comando!');
    }
    await interaction.reply({ content: 'Reiniciando...', ephemeral: true });
    exec('pm2 restart ../index.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao reiniciar o bot: ${error}`);
      } else {
        console.log(stdout);
      }
    });
  },
};
