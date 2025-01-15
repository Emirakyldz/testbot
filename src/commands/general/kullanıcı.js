export default {
    name: 'kullanıcı',
    description: 'Bir kullanıcı hakkında bilgi görüntüler.',
    execute(message, args) {
        // Etiketlenmiş kullanıcıyı al
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!member) {
            return message.reply('Lütfen bir kullanıcıyı etiketleyin veya kullanıcı ID\'sini girin.');
        }

        // Kullanıcı bilgilerini al
        const { user } = member;

        // Mesajı gönder
        message.channel.send({
            embeds: [
                {
                    color: 0x0099ff,
                    title: `${user.tag} hakkında bilgiler`,
                    thumbnail: { url: user.displayAvatarURL({ dynamic: true }) },
                    fields: [
                        { name: 'Kullanıcı Adı', value: user.username, inline: true },
                        { name: 'Kullanıcı ID', value: user.id, inline: true },
                        {
                            name: 'Hesap Oluşturulma Tarihi',
                            value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`,
                            inline: true,
                        },
                        {
                            name: 'Sunucuya Katılma Tarihi',
                            value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`,
                            inline: true,
                        },
                        {
                            name: 'Roller',
                            value: member.roles.cache
                                .filter(role => role.name !== '@everyone')
                                .map(role => role.name)
                                .join(', ') || 'Hiç rol yok',
                            inline: false,
                        },
                    ],
                },
            ],
        });
    },
};
