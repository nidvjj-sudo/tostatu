const Discord = require('discord.js-selfbot-v13');
const keepAlive = require('./server.js');
keepAlive();

const namebutton = "Join Discord";
const link = "https://discord.gg/Ta63JWwbvD"; 
const png1 = "https://cdn.discordapp.com/attachments/1464785403503448222/1473451993014992917/fc4bc0c2d69dd94b155bfc96b7a6e6ed.gif?ex=6996429a&is=6994f11a&hm=6baa306dc84bfda1b74c33ed839dc0ec65cdf5db410961593d75fc2eaa09abc9&"; // Truncated for readability
const png2 = "https://cdn.discordapp.com/attachments/1464785403503448222/1473452143947026669/7223788ac37a98ed63d8396405ce7187.jpg?ex=699642be&is=6994f13e&hm=8eb9bf0c7e8870bc38b183b4ebb734f49151b3003486a9206d67859b3f661d75&"; // Truncated for readability

const client1 = new Discord.Client({ readyStatus: false, checkUpdate: false });
const client2 = new Discord.Client({ readyStatus: false, checkUpdate: false });
const client3 = new Discord.Client({ readyStatus: false, checkUpdate: false });

function setupRichPresence(client) {
  const d = new Discord.RichPresence(client)
    .setApplicationId("1464717312996278498")
    .setType("STREAMING")
    .setURL("https://www.twitch.tv/.")
    .setName("I love u")
    .setDetails("รับเติมไนโต กรอบ เกม")
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(png1)
    .setAssetsSmallImage(png2)
    .addButton(namebutton, link);

  client.user.setActivity(d);
}

client1.on("ready", async () => {
  console.log(`${client1.user.username} is online!`);
  setupRichPresence(client1);
});

client2.on("ready", async () => {
  console.log(`${client2.user.username} is online!`);
  setupRichPresence(client2);
});

client3.on("ready", async () => {
  console.log(`${client3.user.username} is online!`);
  setupRichPresence(client3);
});

client1.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);

