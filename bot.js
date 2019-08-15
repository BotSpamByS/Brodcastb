const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Brodcast");
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "$")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`$`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Brodcast ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$bc |Mira |Brodcast`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);
