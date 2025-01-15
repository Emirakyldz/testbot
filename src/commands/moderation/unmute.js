import { PermissionFlagsBits } from 'discord.js';

export default {
    name: 'unmute',
    description: 'Kullanıcının susturmasını kaldırır.',
    execute(message, args) {
        const member = message.mentions.members.first();
        const mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');

        if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) {
            return message.reply('Bu komutu kullanmak için yetkiniz yok.');
        }

        if (!member) {
            return message.reply('Lütfen susturmasını kaldırmak istediğiniz kullanıcıyı etiketleyin.');
        }

        if (!mutedRole) {
            return message.reply('Muted rolü bulunamadı.');
        }

        member.roles.remove(mutedRole)
            .then(() => message.channel.send(`${member.user.tag} susturması kaldırıldı.`))
            .catch(err => message.reply(`Bir hata oluştu: ${err}`));
    },
};
