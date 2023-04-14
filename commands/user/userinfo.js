const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Mostra informações sobre um usuário')
        .addUserOption(option => option.setName('usuário').setDescription('Usuário para mostrar informações').setRequired(false)),
    async execute(interaction) {
        let user = interaction.user;
        if (interaction.options.data[0]) {
            user = interaction.options.data[0].user;
        }
        if (user) {
            const member = interaction.guild.members.cache.get(user.id);
            if (member) {
                const userInfoEmbed = new MessageEmbed()
                    .setColor('BLUE')
                    .setTitle(`Informações de ${user.username}`)
                    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
                    .addFields(
                        { name: 'ID do usuário', value: user.id, inline: true },
                        { name: 'Conta criada em', value: user.createdAt.toLocaleDateString('pt-BR'), inline: true },
                        { name: 'Entrou em', value: member.joinedAt.toLocaleDateString('pt-BR'), inline: true },
                        { name: 'Cargos', value: member.roles.cache.map(role => role.name).join(', '), inline: true },
                    );
                await interaction.reply({ embeds: [userInfoEmbed] });
            } else {
                await interaction.reply({ content: 'Não foi possível encontrar o usuário especificado.', ephemeral: true });
            }
        } else {
            await interaction.reply({ content: 'Não foi possível encontrar o usuário especificado.', ephemeral: true });
        }
    },
};
