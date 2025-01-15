import { EmbedBuilder } from 'discord.js';

export default {
    name: 'avatar',
    description: 'Belirlenen kullanıcının profil resmini gösterir.',
    async execute(message) {
        // Mesajın yazarı (yani komutu yazan kişi)
        const user = message.mentions.users.first() || message.author;

        // Kullanıcının profil fotoğrafının URL'si
        const avatarURL = user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });

        // Embed ile kullanıcı profili fotoğrafını büyütüyoruz
        const embed = new EmbedBuilder()
            .setTitle(`${user.username} Profil Fotoğrafı`)
            .setColor("Blue")
            .setImage(avatarURL)
            .setFooter({ text: `ID: ${user.id}` })
            .setTimestamp();

        // Embed'i gönderiyoruz
        message.reply({ embeds: [embed] });
    }
};
