const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('martv')
    .setDescription('Mostra informações sobre a plataforma Martv'),
  async execute(interaction) {
    const url = 'https://martv.marstore.repl.co/home/';
    const timeout = 5000; // tempo limite em milissegundos
    const startTime = Date.now();

    fetch(url, { timeout })
      .then(response => {
        const endTime = Date.now();
        const ping = endTime - startTime;

        const embed = {
          color: 0x232ac3,
          title: 'Martv',
          description: "é um site que oferece acesso gratuito a uma variedade de canais de TV ao vivo, filmes e séries de TV e STREAMING. Ele é atualizado regularmente com novos conteúdos e oferece opções de transmissão em alta qualidade. Uma das melhores coisas sobre o Martv é que ele é totalmente gratuito. Você não precisa se registrar ou pagar para acessar seu conteúdo. Além disso, o site é fácil de usar e navegar, tornando-o uma ótima opção para aqueles que procuram uma maneira simples e rápida de assistir a seus programas favoritos. Em resumo, o Martv é uma ótima opção para quem procura uma maneira fácil e gratuita de assistir a canais de TV ao vivo, filmes e séries de TV. Com seu amplo conteúdo e interface amigável, é uma escolha conveniente e acessível para quem quer entretenimento sem sair de casa.",
          fields: [
            { name: 'Ping do site', value: `${ping}ms` },
            { name: 'Ping do bot', value: `${Math.round(interaction.client.ws.ping)}ms` },
          ]
        };

        interaction.reply({ embeds: [embed] });
      })
      .catch(error => {
        console.error('Erro ao pingar o site:', error);
        interaction.reply('Erro ao pingar o site da Martv!');
      });
  },
};
