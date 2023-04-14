const fs = require('fs');

module.exports = (client) => {
  
    client.on('messageCreate', (message) => {
      // Ignora mensagens enviadas por bots
      if (message.author.bot) return;
  
      // Constrói o objeto de mensagem para registro
      const logMessage = {
        author: {
          tag: message.author.tag,
          id: message.author.id,
        },
        channel: {
          name: message.channel.name,
          id: message.channel.id,
        },
        content: message.content,
        timestamp: new Date(),
      };
  
      // Lê o arquivo de log atual e adiciona o objeto de mensagem ao array de mensagens
      let logData = [];
      if (fs.existsSync('log.json')) {
        const fileData = fs.readFileSync('log.json', { encoding: 'utf8' });
        logData = JSON.parse(fileData);
      }
      logData.push(logMessage);
  
      // Escreve o array atualizado no arquivo de log
      fs.writeFileSync('log.json', JSON.stringify(logData, null, 2));
    });
  };

  let logData = [];
  if (fs.existsSync('log.json')) {
    const fileData = fs.readFileSync('log.json', { encoding: 'utf8' });
    if (fileData) {
      try {
        logData = JSON.parse(fileData);
      } catch (e) {
        console.error('Error parsing log file:', e);
      }
    }
  }
  