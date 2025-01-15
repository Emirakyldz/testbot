export default {
    name: 'zar',
    description: 'Belirtilen yüzlü bir zar atar.',
    execute(message, args) {
        // Eğer bir sayı girilmemişse varsayılan olarak 6'lık zar at
        const max = parseInt(args[0], 10) || 6;

        // Sayının geçerli olup olmadığını kontrol et
        if (isNaN(max) || max <= 0) {
            return message.reply('Lütfen geçerli bir pozitif sayı girin. Örneğin: `!zar 12`');
        }

        // 1 ile belirtilen sayı arasında rastgele bir sayı seç
        const roll = Math.floor(Math.random() * max) + 1;

        // Sonucu gönder
        message.channel.send(`🎲 **${max} yüzlü zar** atıldı ve sonuç: **${roll}**!`);
    },
};
