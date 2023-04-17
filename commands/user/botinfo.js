const { version: djsVersion } = require('discord.js');
const { version: nodeVersion } = process;
const moment = require('moment');
require('moment-duration-format');
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const os = require('os');


const packageJson = JSON.parse(fs.readFileSync('./package.json'));

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Mostra informações sobre o bot'),
  async execute(interaction) {
    const embed = {
      color: 0x232ac3,
      title: 'Informações do bot',
      fields: [
        { name: 'Versão Do Bot', value: packageJson.version },
        { name: 'Discord.js Versão', value: djsVersion },
        { name: 'Linguagem', value: 'JavaScript' },
        { name: 'Repositório', value: 'https://github.com/Marstore/martv-discord-bot' },
        { name: 'Ping do bot', value: `${interaction.client.ws.ping}ms` },
        { name: 'Ping da Hospedagem', value: `${Math.round(Date.now() - (interaction.createdTimestamp + interaction.client.ws.ping))}ms` },
        { name: 'API Latência', value: `${Date.now() - interaction.createdTimestamp}ms` },
        { name: 'Sistema Operacional', value: `${os.platform()} (${os.release()})` },
        { name: 'Processador', value: `${os.cpus()[0].model}` },
        { name: 'Memória RAM Total', value: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB` },
        { name: 'Memória RAM Disponível', value: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB` },
        { name: 'Tempo de atividade', value: moment.duration(interaction.client.uptime).format('d[d ]h[h ]m[m ]s[s]'), inline: true },
        { name: 'Última reinicialização', value: moment().subtract(process.uptime(), 'seconds').locale('pt-br').format('LLLL'), inline: true }
      ]
    };

    interaction.reply({ embeds: [embed] });
  },
};
