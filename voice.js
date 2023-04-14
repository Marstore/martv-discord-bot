const { joinVoiceChannel } = require('@discordjs/voice');

let voiceConnection;

module.exports = {
  handleVoiceConnection: function(oldState, newState) {
    if (oldState.member.user.bot || newState.member.user.bot) return; 
    if (!newState.channel || oldState.channel === newState.channel) return; 

    const channelId = '1096482229628174407';
    voiceConnection = joinVoiceChannel({
      channelId: channelId,
      guildId: newState.guild.id,
      adapterCreator: newState.guild.voiceAdapterCreator,
    });

    voiceConnection.on(VoiceConnectionStatus.Disconnected, async () => {
      await Promise.race([
        voiceConnection.destroy(),
        new Promise(resolve => setTimeout(resolve, 5000))
      ]);
      voiceConnection.rejoin();
    });
  }
}
