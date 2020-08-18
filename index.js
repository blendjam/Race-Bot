const displayBoka = require("./boka.js");
const startRace = require("./race.js");
const Discord = require("discord.js");
const showAvatar = require("./avatar.js");
const fs = require("fs");
const nameList = require("./nameList.js");
const keepAlive = require("./server.js");
const addBaka = require("./addBaka.js");
const showHelp = require("./showHelp.js");
const toggleVariables = require("./toggle.js");
require("dotenv").config();

let gifs;
let variables = {
  isIndeed: true,
  isAA: true,
  isDaWoo: true,
  isBee: true,
};

const client = new Discord.Client();

const PREFIX = "`";

const token = process.env.TOKEN;

client.on("ready", () => {
  console.log("Bot is online!");
  gifs = JSON.parse(fs.readFileSync("./gifs.json"));
});

client.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");
  try {
    if (message.content.startsWith(PREFIX)) {
      switch (args[0]) {
        case "baka":
          displayBoka(args, message, gifs);
          break;
        case "abaka":
          addBaka(args[1].trim(), message, gifs, fs);
          break;
        case "avatar":
          showAvatar(message);
          break;
        case "help":
          showHelp(args[1], message);
          break;
        case "race":
          startRace(args, message, client);
          break;
        case "toggle":
          variables = toggleVariables(args[1], message, variables);
          break;
        case "danceboi":
          message.channel.send(
            "https://media.giphy.com/media/TfKfqjt2i4GIM/giphy.gif"
          );
          break;
      }
      if (
        message.author.id == "551615059030179861" ||
        message.author.id == "505368807037206558" ||
        message.author.id == "621977065712910336"
      ) {
        nameList(args[0], message, fs);
      }
    }
    if (variables.isBee && message.author.id == "667444572632121375") {
      if (message.content == "yes ma'am") {
        message.channel.reply(
          "https://tenor.com/view/hug-virtual-hug-hug-sent-gif-5026057"
        );
      }
    }
    if (variables.isDaWoo && message.author.id == "539368618006413363") {
      if (message.content.toLowerCase().startsWith("da")) {
        const person = message.content.split(" ")[1];
        message.channel.send(
          `Da ${person} run while you can he's gonna get you`
        );
      }
    }
    if (message.author.id == "726037232611491852") {
      if (variables.isAA && message.content.toLowerCase().includes("aaa")) {
        message.channel.send(
          "https://tenor.com/view/vyx-furry-aaaa-aaaaa-scream-gif-17575013"
        );
      }
    }
  } catch (err) {
    if (err) console.log(err);
  }
});
keepAlive();
client.login(token);
