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
          description: "O que é MarTv? É um site totalmente gratuito para assistir a canais de televisão abertos e fechados, bem como filmes e séries, diretamente em seu navegador ou por meio de um aplicativo. Criamos esse site para pessoas que não têm televisão em casa ou não têm condições de pagar por serviços como a SKY. Você pode acessar o site através do link https://martv.marstore.repl.co/ . Por favor, ajude nossa equipe, já que ainda não temos todos os canais disponíveis. Se você tiver sugestões, pode compartilhá-las conosco no chat.",
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
