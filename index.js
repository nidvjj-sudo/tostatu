const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keepAlive = require('./server.js');
keepAlive();

const png1 = "https://cdn.discordapp.com/attachments/1464785403503448222/1473451993014992917/fc4bc0c2d69dd94b155bfc96b7a6e6ed.gif?ex=6996429a&is=6994f11a&hm=6baa306dc84bfda1b74c33ed839dc0ec65cdf5db410961593d75fc2eaa09abc9&";
const png2 = "https://cdn.discordapp.com/attachments/1464785403503448222/1473452143947026669/7223788ac37a98ed63d8396405ce7187.jpg?ex=699642be&is=6994f13e&hm=8eb9bf0c7e8870bc38b183b4ebb734f49151b3003486a9206d67859b3f661d75&";

client.on("ready", async () => {
  console.log(`${client.user.username} is online !`);
  
  setInterval(() => {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", day: "numeric", month: "2-digit", year: "numeric" };
    const b = a.toLocaleDateString("th-TH", c);

    const d = new Discord.RichPresence(client)
      .setApplicationId("1464717312996278498")
      .setType("STREAMING")
      .setURL("https://www.twitch.tv/.")
      .setName("I love u")
      .setDetails(`รับเติมไนโต กรอบ เกม`)
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage(png1)
      .setAssetsSmallImage(png2);

    client.user.setActivity(d);
  }, 500);
});

function getCurrentTime() {
  const a = new Date(Date.now());
  const c = { timeZone: "Asia/Bangkok", hour: "2-digit", minute: "2-digit", hour12: false };
  return a.toLocaleTimeString("en-US", c);
}
client.login(process.env.TOKEN);