
import { EmbedBuilder } from 'discord.js';
export default client => {


    client.on("messageCreate" , message => {
        if(message.content == "sa"){
            message.channel.send("AS GARDASIM HOSGELDİN");
            }

            if(message.content == "31"){
                message.channel.send("62");
                }

                if(message.content == "orospu"){
                    message.channel.send("ismayıl");
                    }

                    if(message.content == "61"){
                        message.channel.send("trabzonluluarı sikim");
                        }
                        if(message.content == "wave"){
                            message.channel.send("ananı sikim senin");
                            }
                            if(message.content == "deniz"){
                                message.channel.send("<3");
                                }

                    if(message.content == "azeri"){

                        const response = new EmbedBuilder()
                        .setTitle("Marşımız")
                        .setAuthor({name : "Selamun aleyküm" , iconURL :"https://i.imgur.com/C63oXkD.png"} )
                        .setURL("https://www.youtube.com/watch?v=IDq3UkFyTiQ")
                        .setDescription("İsmayılın amına koymak için görevlendirilmiş bir Discord botuyum.")
                        .setColor("#d61118")
                        .setFooter({text : "AZERBAYCAN<3"})
                        .setTimestamp()
                        .setImage("https://i.imgur.com/wL6tdEi.jpeg")
                        .setThumbnail("https://i.imgur.com/9CMu70s.jpeg")

                        message.channel.send({content : "Yaşa Azerbaycan" , embeds : [response]});
                    }

                    if (message.content === "bilgi") {
                        const response = new EmbedBuilder()
                            .setTitle("Test Botu")
                            .setDescription("Deneme yapıyom baboli.\n\u200b")
                            .setColor("#d61118")
                            .setFooter({ text: "Hizmet etmek için doğdum" })
                            .setTimestamp()
                            .addFields(
                                { name: "Developer", value: "<@251730659108847616>", inline: true },
                                { name: "Ping", value: `${message.client.ws.ping} ms`, inline: true },
                                { name: "Toplam kullanıcı", value:`${message.guild.memberCount} kişi`, inline: true },
                                { name: "İnsta", value: "[Tıkla](https://www.instagram.com/akyildizzemir)", inline: true },
                                { name: "Destek", value: "[Tıkla](https://discord.gg/qCaWBbkw)", inline: true },
                                { name: "MBD", value: "[Tıkla](https://discord.gg/ChKWH3eV)", inline: true }
                            )
                    
                        message.channel.send({ content: "TEST", embeds: [response] });
                    }


                    
                    


            
    })
}