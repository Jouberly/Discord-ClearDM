const { Client } = require("discord.js-selfbot-v13");
const { token, trigger } = require("./config.json");

const client = new Client();

client.on("ready", () => {
    console.log(`Logado como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {

    if (message.author.id !== client.user.id) return;

    if (message.content === trigger) {
        console.log("Trigger detectado. Limpando mensagens...");

        // Busca mensagens na DM
        const channel = message.channel;
        let lastMessageID;

        while (true) {

            const messages = await channel.messages.fetch({ limit: 50, before: lastMessageID });


            const myMessages = messages.filter((msg) => msg.author.id === client.user.id);


            for (const msg of myMessages.values()) {
                try {
                    await msg.delete();
                    console.log(`Mensagem deletada: ${msg.id}`);
                } catch (err) {
                    console.error(`Erro ao deletar mensagem: ${err.message}`);
                }
            }


            lastMessageID = messages.last()?.id;


            if (messages.size < 50) break;
        }

        console.log("Mensagens limpas com sucesso!");
    }
});


client.login(token).catch((err) => {
    console.error("Erro ao logar:", err.message);
});
