import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import 'dotenv/config';

const client = new Client({
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    presence: { status: "online", activities: [{ name: "Bot-Chan", type: 0 }] }
});

// Event loader
client.events = new Collection();
readdirSync("./events").forEach(async file => {
    const event = await import(`./events/${file}`).then(m => m.default);
    client.events.set(event.name, event);
    console.log(`Event yüklendi: ${file}`);
    event(client);
});

// Command loader
client.commands = new Collection();
readdirSync("./commands").forEach(category => {
    readdirSync(`./commands/${category}`).forEach(async file => {
        const command = await import(`./commands/${category}/${file}`).then(c => c.default);
        client.commands.set(command.name, command);
        console.log(`Komut yüklendi: ${command.name}`);
    });
});

client.login(process.env.token);
