import { EmbedBuilder } from "discord.js";   

export default {
    name: "ping",
    description: 'Sunucunun mevcut pingini gösterir.',
    execute(message) {
        const discord_ping = message.client.ws.ping;
        const startTime = Date.now();

        

        message.reply({ content: "Ping Status;", embeds: [] }).then(sentMessage => {
            const bot_ping = Date.now() - startTime;
            const fixed_bot_ping = Math.max(0, bot_ping);

            const response = new EmbedBuilder()
                .setColor("Red")
                .addFields(
                    { name: "Discord Gecikmesi", value: `${discord_ping} ms`, inline: true },
                    { name: "Bot Gecikmesi", value: `${fixed_bot_ping} ms`, inline: true }
                );

            sentMessage.edit({ embeds: [response] });
        });
    }
};
