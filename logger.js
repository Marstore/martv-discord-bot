const fs = require('fs');

module.exports = (client) => {
  
    client.on('messageCreate', (message) => {
      
      if (message.author.bot) return;
  
      
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
  
      
      let logData = [];
      if (fs.existsSync('log.json')) {
        const fileData = fs.readFileSync('log.json', { encoding: 'utf8' });
        logData = JSON.parse(fileData);
      }
      logData.push(logMessage);
  

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
  