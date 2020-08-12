const displayBoka = require("./boka.js");
const startRace = require("./race.js");
const Discord = require("discord.js");
const showAvatar = require("./avatar.js");
const fs = require("fs");
const nameList = require("./nameList.js");
// const TOKEN = require("./token.js");

(function () {
  const data = fs.readFileSync("./scribbleNames.json");
  let words = JSON.parse(data);

  const bot = new Discord.Client();

  const token = process.env.TOKEN;
  // const token = TOKEN.token;

  const PREFIX = "`";

  bot.on("ready", () => {
    console.log("Bot is online!");
  });

  bot.on("message", message => {
    let args = message.content.substring(PREFIX.length).split(" ");

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
      if (
        message.author.id == "551615059030179861" ||
        message.author.id == "505368807037206558" ||
        message.author.id == "539368618006413363"
      ) {
        nameList(args[0], words, message, fs);
      }
    }
  });

  bot.login(token);
})();
