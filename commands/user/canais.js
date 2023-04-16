const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("canais")
        .setDescription("😁 Exibe os canais disponíveis no site e app"),
    async execute(interaction) {
        const embed = {
            color: 0x232ac3,
            title: 'Canais Disponíveis',
            fields: [
                { name: "TV Globo SP", value: "https://redeglobo.globo.com/sao-paulo/"},
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
                { name: "Star Channel", value: "https://www.star-brasil.com/star-channel" },
                { name: "FX", value: "https://www.fxnetworks.com/" },
                { name: "Warner", value: "https://www.warnerchannel.com/br/" },
                { name: "Cartoon", value: "https://www.cartoonnetwork.com.br/" },
                { name: "Telecine Fun", value: "https://www.telecineplay.com.br/telecine-fun",},
                { name: "Telecine Premium", value: "https://www.telecineplay.com.br/telecine-premium",},
                { name: "Telecine Action", value: "https://www.telecineplay.com.br/telecine-action",},
                { name: "Telecine Touch", value: "https://www.telecineplay.com.br/telecine-touch",},
                { name: "Telecine Pipoca",value: "https://www.telecineplay.com.br/telecine-pipoca",},
                { name: "Telecine Cult", value: "https://www.telecineplay.com.br/telecine-cult",},
                { name: "Nickelodeon", value: "https://www.nickelodeon.com.br/" },
                { name: "Disney", value: "https://www.disney.com.br/tv" },
                { name: "BBB Câmera Principal", value: "https://vitrine.globo.com/assine/bbb",},
                { name: "BBB 2", value: "https://vitrine.globo.com/assine/bbb" },
                { name: "BBB 3", value: "https://vitrine.globo.com/assine/bbb" },
                { name: "BBB 4", value: "https://vitrine.globo.com/assine/bbb" },
                { name: "BBB 5", value: "https://vitrine.globo.com/assine/bbb" },
                { name: "BBB 6", value: "https://vitrine.globo.com/assine/bbb" },
                { name: "BBB 7", value: "https://vitrine.globo.com/assine/bbb" },
                { name: "BBB 8", value: "https://vitrine.globo.com/assine/bbb" },
                { name: "BBB 9", value: "https://vitrine.globo.com/assine/bbb" },
                { name: "BBB 10", value: "https://vitrine.globo.com/assine/bbb" }
            ]
        };
         
        interaction.reply({ embeds: [embed] });
    },
  };
  