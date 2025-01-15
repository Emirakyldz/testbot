import axios from 'axios';

export default {
    name: 'kedi',
    description: 'Rastgele bir kedi resmi gönderir.',
    async execute(message) {
        const url = 'https://api.thecatapi.com/v1/images/search';  // The Cat API URL
        const apiKey = 'live_9Gb7vNKydsy9kBMEyUNaOk9XEQfnLiAd775plgbH82PS4e9nYtbIoQaFnGooUP7R';  // Cat API Key

        try {
            const response = await axios.get(url, {
                headers: {
                    'x-api-key': apiKey,
                }
            });

            const imageUrl = response.data[0].url;  // Resmin URL'si

            // Resmi gönder
            message.channel.send({
                content: 'İşte bir kedi resmi! 😺',
                files: [imageUrl],
            });
        } catch (error) {
            console.error('Kedi API hatası:', error);
            message.reply('Kedi resmi alınırken bir hata oluştu.');
        }
    },
};
