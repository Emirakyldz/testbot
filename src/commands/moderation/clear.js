import { EmbedBuilder } from 'discord.js';

export default {
    name: 'clear',
    description: 'Geçmiş mesajları belirtilen sayıya kadar siler.',
    async execute(message, args) {
        // Kullanıcıdan silmek istediği mesaj sayısını al
        const amount = parseInt(args[0]);
    
        // Geçersiz bir sayı girildiyse veya sayı 1 ile 100 arasında değilse uyarı ver
        if (isNaN(amount) || amount < 1 || amount > 100) {
            return message.reply('Lütfen 1 ile 100 arasında bir sayı girin.');
        }
    
        // Mesajları silme işlemi
        try {
            // Silinecek mesajları al, yalnızca 14 günden eski olmayanlar seçilsin
            const messages = await message.channel.messages.fetch({ limit: amount });
            const filteredMessages = messages.filter(msg => {
                return msg.createdAt >= (Date.now() - 14 * 24 * 60 * 60 * 1000); // 14 gün
            });
    
            if (filteredMessages.size === 0) {
                return message.reply('Silinecek mesaj bulunamadı. 14 günden eski mesajlar silinemez.');
            }
    
            // Mesajları silme işlemi
            await message.channel.bulkDelete(filteredMessages, true);
    
            const embed = new EmbedBuilder()
                .setColor('Green')
                .setDescription(`Başarıyla ${filteredMessages.size} mesaj silindi!`)
                .setTimestamp();
    
            // Başarı mesajını gönder
            const successMessage = await message.channel.send({ embeds: [embed] });

            // 5 saniye sonra başarı mesajını sil
            setTimeout(() => {
                successMessage.delete();
            }, 5000); // 5000 ms = 5 saniye
        } catch (error) {
            console.error(error);
            message.reply('Mesajlar silinirken bir hata oluştu.');
        }
    }
};
