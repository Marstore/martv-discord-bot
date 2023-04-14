const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("canais")
        .setDescription("😁 Exibe os canais disponíveis no site e app"),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setTitle("Canais Disponíveis")
            .setDescription("Veja abaixo os canais disponíveis no site e app:")
            .addFields(
                { name: "TV Globo", value: "https://redeglobo.globo.com/" },
                { name: "SBT", value: "https://www.sbt.com.br/" },
                { name: "Band", value: "https://www.band.uol.com.br/" },
                { name: "Record", value: "https://recordtv.r7.com/" },
                { name: "RedeTV", value: "https://www.redetv.uol.com.br/" },
                { name: "Sportv", value: "https://globosatplay.globo.com/sportv/" },
                { name: "Sportv 2", value: "https://globosatplay.globo.com/sportv-2/" },
                { name: "Sportv 3", value: "https://globosatplay.globo.com/sportv-3/" },
                { name: "Premiere Clubes", value: "https://globosatplay.globo.com/premiere/",},
                { name: "Premiere 2", value: "https://globosatplay.globo.com/premiere-2/",},
                { name: "Premiere 3", value: "https://globosatplay.globo.com/premiere-3/",},
                { name: "ESPN", value: "https://www.espn.com.br/" },
                { name: "ESPN 4", value: "https://www.espn.com.br/" },
                { name: "Star Channel", value: "https://www.starplus.com/br/pt-br/" },
                { name: "FX", value: "https://www.foxplay.com/br" },
                { name: "Warner", value: "https://www.warnerchannel.com/br/" },
                { name: "Cartoon", value: "https://www.cartoonnetwork.com.br/" },
                { name: "Telecine Fun", value: "https://www.telecineplay.com.br/telecine-fun",},
                { name: "Telecine Premium", value: "https://www.telecineplay.com.br/telecine-premium",},
                { name: "Telecine Action", value: "https://www.telecineplay.com.br/telecine-action",},
                { name: "Telecine Touch", value: "https://www.telecineplay.com.br/telecine-touch",},
                { name: "Telecine Pipoca",value: "https://www.telecineplay.com.br/telecine-pipoca",},
                { name: "Telecine Cult", value: "https://www.telecineplay.com.br/telecine-cult",},
                { name: "Nickelodeon", value: "https://www.nickelodeon.com.br/" },
                { name: "Disney", value: "https://www.disneyplus.com/pt-br/" },
                { name: "BBB Câmera Principal", value: "https://globoplay.globo.com/realities-shows/big-brother-brasil/camera-principal/",},
                { name: "BBB 2", value: "https://globoplay.globo.com/bbb-2/p/18450/" },
                { name: "BBB 3", value: "https://globoplay.globo.com/bbb-3/p/18452/" },
                { name: "BBB 4", value: "https://globoplay.globo.com/bbb-4/p/18453/" },
                { name: "BBB 5", value: "https://globoplay.globo.com/bbb-5/p/18454/" },
                { name: "BBB 6", value: "https://globoplay.globo.com/bbb-6/p/18455/" },
                { name: "BBB 7", value: "https://globoplay.globo.com/bbb-7/p/18456/" },
                { name: "BBB 8", value: "https://globoplay.globo.com/bbb-8/p/18457/" },
                { name: "BBB 9", value: "https://globoplay.globo.com/bbb-9/p/18458/" },
                { name: "BBB 10", value: "https://globoplay.globo.com/bbb-10/p/18459/" }
            )
            .setColor("BLUE");

        await interaction.reply({ embeds: [embed] });
    },
};
