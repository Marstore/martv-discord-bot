const { version: djsVersion } = require('discord.js');
const { version: nodeVersion } = process;
const moment = require('moment');
require('moment-duration-format');
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json'));

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Mostra informações sobre o bot'),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setTitle('Informações do bot')
      .addField('Versão Do Bot', packageJson.version)
      .addField('Repositório', 'https://github.com/Marstore/martv-discord-bot')
      .addField('Linguagem', 'JavaScript')
      .addField('Node.js Versão', nodeVersion)
      .addField('Discord.js Versão', djsVersion)
      .addField('Ping', `${interaction.client.ws.ping}ms`)
      .addField('API Latência', `${Date.now() - interaction.createdTimestamp}ms`)
      .addField('Ping da Hospedagem', `${Math.round(Date.now() - (interaction.createdTimestamp + interaction.client.ws.ping))}ms`)
      .addFields(
        { name: 'Tempo de atividade', value: moment.duration(interaction.client.uptime).format('d[d ]h[h ]m[m ]s[s]'), inline: true },
        { name: 'Última reinicialização', value: moment().subtract(process.uptime(), 'seconds').locale('pt-br').format('LLLL'), inline: true }
      )
      .setColor('BLUE');

    interaction.reply({ embeds: [embed] });
  },
};
