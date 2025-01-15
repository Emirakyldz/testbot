import { PermissionFlagsBits } from 'discord.js';

export default {
    name: 'ban',
    description: 'Kullanıcıyı yasaklar.',
    execute(message, args) {
        const member = message.mentions.members.first();
        const reason = args.slice(1).join(' ') || 'Sebep belirtilmedi.';

        if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) {
            return message.reply('Bu komutu kullanmak için yetkiniz yok.');
        }

        if (!member) {
            return message.reply('Lütfen yasaklamak istediğiniz kullanıcıyı etiketleyin.');
        }

        if (!member.bannable) {
            return message.reply('Bu kullanıcıyı yasaklayamıyorum.');
        }

        member.ban({ reason })
            .then(() => message.channel.send(`${member.user.tag} başarıyla yasaklandı. Sebep: ${reason}`))
            .catch(err => message.reply(`Bir hata oluştu: ${err}`));
    },
};
