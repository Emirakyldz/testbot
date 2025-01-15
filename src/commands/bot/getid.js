export default {
    name: "getid",
    description: 'Belirlenen kullanıcının DiscordIDsini gösterir.',
    execute(message) {
        if (message.mentions.users.size === 0) {
            return message.reply("Lütfen bir kullanıcı etiketleyin.");
        }

        const user = message.mentions.users.first();  // İlk etiketlenen kullanıcıyı al
        message.reply(`Etiketlenen kullanıcının ID'si: ${user.id}`);
    }
};
