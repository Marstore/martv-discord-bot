const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { token, statusMessages, statusInterval } = require('./config/config.json');
const { firebase, db, serverRef } = require('./database/firebase');
const { handleVoiceConnection } = require('./config/voice');
const { setStatus } = require('./config/status');

if (firebase.app()) {
  console.log("Firebase - conectado");
} else {
  console.log("Erro ao conectar ao Firebase.");
}

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Collection(); 

const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.data.name, command);
  }
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Ocorreu um erro ao executar este comando.', ephemeral: true });
  }
});

client.on('ready', async () => {
  console.log(`Logado como ${client.user.tag}!`);

  setStatus(client);

  const commands = [
    
    {
      name: 'avatar',
      description: 'Exibe o avatar de um usuário.'
    },
    {
      name: 'canais',
      description: '😁 Exibe os canais disponíveis no site e app'
    },
    {
      name: 'botinfo',
      description: 'Mostra informações sobre o bot.'
    },
    {
      name: 'userinfo',
      description: 'Exibe informações sobre o usuário.',
    },
    {
      name: 'martv',
      description: 'Mostra informações sobre a plataforma Martv.',
    },
    {
      name: 'rr',
      description: 'Reinicia o bot.'
    }
  ];
  const logChannelId = '1018375967837794375'; 
  require('./system/logMessage')(client, logChannelId);

  const commandGuild = await client.guilds.cache.get('878309207433150564');
  const commandManager = commandGuild.commands;

  try {
    await commandManager.set(commands);
    // console.log('Comandos Slash registrados com sucesso!');
  } catch (error) {
    console.error(error);
  }
});

client.on('messageCreate', (message) => {
  
});

client.on('voiceStateUpdate', (oldState, newState) => {
  handleVoiceConnection(oldState, newState);
});

client.on('guildMemberAdd', (member) => {
  serverRef.transaction((currentValue) => {
    return (currentValue || 0) + 1;
  });
});

client.login(token);