const displayBoka = require("./boka.js");
const startRace = require("./race.js");
const Discord = require("discord.js");
const showAvatar = require("./avatar.js");
//const TOKEN = require("./token.js");

(function () {
  const bot = new Discord.Client();

  const token = process.env.TOKEN;
  //const token = TOKEN.token;

  const PREFIX = "`";

  bot.on("ready", () => {
    console.log("Bot is online!");
  });

  bot.on("message", message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (
      message.author.id === "726037232611491852" &&
      ( message.content.toLowerCase() == "in-ded" ||
       message.content.toLowerCase().startsWith("inde")||
        message.content.toLowerCase() == "in-deed")
    ) {
      message.reply("Indeed you are an Idiot !!! :rofl:");
    }
    if (message.content.startsWith(PREFIX)) {
      switch (args[0]) {
        case "baka":
          displayBoka(args, message);
          break;
        case "avatar":
          showAvatar(message);
          break;
        case "race":
          startRace(args, message, bot);
          break;
        case "gn":
          message.channel.send(`Good Night ${args[1]}`);
          break;
      }
    }
  });

  bot.login(token);
})();
