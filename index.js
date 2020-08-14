const displayBoka = require("./boka.js");
const startRace = require("./race.js");
const Discord = require("discord.js");
const showAvatar = require("./avatar.js");
const fs = require("fs");
const nameList = require("./nameList.js");
const TOKEN = require("./token.js");
const keepAlive = require("./server.js");
const addBaka = require("./addBaka.js");

let gifs;
let variables = {
  isIndeed: false,
  isAA: false,
};

const PREFIX = ".";
const client = new Discord.Client();

const token = TOKEN.token;

client.on("ready", () => {
  console.log("Bot is online!");
  gifs = JSON.parse(fs.readFileSync("./gifs.json"));
});

client.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");
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
      case "race":
        startRace(args, message, client);
        break;
      case "toggleI":
        if (message.author.id == "539368618006413363") {
          variables.isIndeed = !variables.isIndeed;
          message.reply(variables.isIndeed);
        }
        break;
      case "toggleA":
        if (message.author.id == "539368618006413363") {
          variables.isAA = !variables.isAA;
          message.reply(variables.isAA);
        }
    }
    if (
      message.author.id == "551615059030179861" ||
      message.author.id == "505368807037206558" ||
      message.author.id == "539368618006413363"
    ) {
      nameList(args[0], message, fs);
    }
  }
  if (message.author.id == "726037232611491852") {
    if (variables.isAA && message.content.toLowerCase().includes("aaa")) {
      message.channel.send(
        "https://tenor.com/view/vyx-furry-aaaa-aaaaa-scream-gif-17575013"
      );
    }
    if (
      variables.isIndeed &&
      (message.content.toLowerCase() == "in-ded" ||
        message.content.startsWith("inde") ||
        message.content.toLowerCase().startsWith("inde") ||
        message.content.toLowerCase() == "in-deed" ||
        message.content.toLowerCase() == "indid")
    ) {
      message.reply("Indeed you are an Idiot !!! :rofl:");
    }
  }
});
keepAlive();
client.login(token);
