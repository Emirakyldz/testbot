export default client => {
    const prefix = process.env.prefix;

    client.on("messageCreate", message => {

        if (!message.content.startsWith(prefix)) return;

        // Argümanları ayırma
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

   
        const command = client.commands.get(commandName);


        if (!command) {
            console.log(`Komut bulunamadı: ${commandName}`);
            return;
        }


        try {

            command.execute(message, args);
        } catch (e) {
            console.error(e);
            message.reply("Bu komutta şu an bir hata var!");
        }
    });
};