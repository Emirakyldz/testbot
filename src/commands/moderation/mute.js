import { PermissionFlagsBits } from 'discord.js';

export default {
    name: 'mute',
    description: 'Kullanıcıyı susturur.',
    execute(message, args) {
        const member = message.mentions.members.first();
        const mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');

        if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) {
            return message.reply('Bu komutu kullanmak için yetkiniz yok.');
        }

        if (!member) {
            return message.reply('Lütfen susturmak istediğiniz kullanıcıyı etiketleyin.');
        }

        if (!mutedRole) {
            return message.reply('Muted rolü bulunamadı. Lütfen bir "Muted" rolü oluşturun.');
        }

        member.roles.add(mutedRole)
            .then(() => message.channel.send(`${member.user.tag} başarıyla susturuldu.`))
            .catch(err => message.reply(`Bir hata oluştu: ${err}`));
    },
};
