const { MessageButton } = require('discord.js');

const statusMessages = [
  'Melhor Site para assistir Filmes',
  'Séries e Canais de TV',
  '100% Grátis'
];

const statusInterval = 5000;

function updateStatus(client) {
  const randomIndex = Math.floor(Math.random() * statusMessages.length);
  const newStatus = statusMessages[randomIndex];
  const siteButton = new MessageButton()
    .setLabel('SITE')
    .setStyle('LINK')
    .setURL('https://martv.marstore.repl.co/');
  client.user.setActivity(newStatus, { type: 'WATCHING', buttons: [siteButton] });
}

function setStatus(client) {
  updateStatus(client);
  setInterval(() => {
    updateStatus(client);
  }, statusInterval);
}

module.exports = { setStatus };
