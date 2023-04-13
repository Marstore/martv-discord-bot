const { MessageSelectMenu, MessageActionRow } = require('discord.js');

module.exports = {
  data: {
    name: 'canais',
    description: 'Mostra a lista de canais disponíveis.',
    type: 'CHAT_INPUT'
  },
  async execute(interaction) {
    const selectMenu = new MessageSelectMenu()
      .setCustomId('canais-select')
      .setPlaceholder('Selecione um canal')
      .addOptions([
        {
          label: 'Globo',
          description: 'Assista à programação da Rede Globo.',
          value: 'globo'
        },
        {
          label: 'SBT',
          description: 'Assista à programação do SBT.',
          value: 'sbt'
        }
      ]);

    const actionRow = new MessageActionRow()
      .addComponents(selectMenu);

    await interaction.reply({ content: 'Selecione um canal:', components: [actionRow] });
  }
};
