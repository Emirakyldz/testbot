import { PermissionFlagsBits } from 'discord.js';

export default {
    name: 'kick',
    description: 'Kullanıcıyı sunucudan atar.',
    execute(message, args) {
        const member = message.mentions.members.first();
        const reason = args.slice(1).join(' ') || 'Sebep belirtilmedi.';

        if (!message.member.permissions.has(PermissionFlagsBits.KickMembers)) {
            return message.reply('Bu komutu kullanmak için yetkiniz yok.');
        }

        if (!member) {
            return message.reply('Lütfen atmak istediğiniz kullanıcıyı etiketleyin.');
        }

        if (!member.kickable) {
            return message.reply('Bu kullanıcıyı atamıyorum.');
        }

        member.kick(reason)
            .then(() => message.channel.send(`${member.user.tag} başarıyla atıldı. Sebep: ${reason}`))
            .catch(err => message.reply(`Bir hata oluştu: ${err}`));
    },
};
