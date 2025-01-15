import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Geçerli dosyanın yolunu almak için import.meta.url kullanın
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    name: 'komutlar',
    description: 'Botun tüm komutlarını ve açıklamalarını listeler.',
    async execute(message) {
        const commandsPath = path.join(__dirname, '..', '..', 'commands');  // 'commands' klasörünün yolu
        const commandFolders = fs.readdirSync(commandsPath);  // 'commands' klasöründeki alt klasörler

        let commandList = 'Botun mevcut komutları:\n\n';

        // Klasörlerdeki her komutu kontrol et
        for (const folder of commandFolders) {
            const folderPath = path.join(commandsPath, folder);
            const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));  // .js dosyaları

            commandList += `**${folder}**:\n`;  // Klasör ismini başlık olarak ekle

            // Her bir komut dosyasını kontrol et
            for (const file of commandFiles) {
                const commandPath = path.join(folderPath, file);

                try {
                    // Dinamik olarak komut dosyasını import et
                    const commandModule = await import(`file://${commandPath}`);

                    // Eğer export default kullanıldıysa
                    const { name, description } = commandModule.default || commandModule;  
                    

                    commandList += `- **${name}**: ${description || 'Açıklama mevcut değil.'}\n`;  // Komut ismi ve açıklamasını ekle
                } catch (error) {
                    console.error(`Komut dosyası yüklenirken hata: ${commandPath}`, error);
                    commandList += `- **${file}**: Yükleme hatası\n`;
                }
            }

            commandList += '\n';  // Klasörler arasında boşluk bırak
        }

        try {
            await message.author.send(commandList);  // Kullanıcıya listeyi gönder
            message.reply('Komutlar size DM olarak gönderildi.');
        } catch (err) {
            console.error('DM gönderilemedi:', err);
            message.reply('Komutları göndermede bir hata oluştu.');
        }
    },
};
