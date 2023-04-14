const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Collection();

// Carregar comandos
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

  const commands = [
    {
      name: 'ping',
      description: 'Ping do bot!'
    },
    {
      name: 'rr',
      description: 'Reinicia o bot'
    }
  ];

  const logger = require('./logger.js')(client);

  const commandGuild = await client.guilds.cache.get('878309207433150564');
  const commandManager = commandGuild.commands;

  // Registra os comandos Slash
  try {
    await commandManager.set(commands);
    console.log('Comandos Slash registrados com sucesso!');
  } catch (error) {
    console.error(error);
  }
});

// Logger de mensagens
client.on('messageCreate', (message) => {
  // ...
});

client.login(token);
