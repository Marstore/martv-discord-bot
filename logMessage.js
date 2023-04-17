const fs = require('fs');

module.exports = (client, logChannelId) => {
  const logChannel = client.channels.cache.get(logChannelId);
  
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
    
    logChannel.send(JSON.stringify(logMessage, null, 2));
  });
};
