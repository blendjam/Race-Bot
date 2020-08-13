const displayBoka = require("./boka.js");
const startRace = require("./race.js");
const Discord = require("discord.js");
const showAvatar = require("./avatar.js");
const fs = require("fs");
const nameList = require("./nameList.js");
const TOKEN = require("./token.js");
const keepAlive = require('./server.js');

let isIndeed, words;
const PREFIX = "`";
const client = new Discord.Client();

const token = TOKEN.token;

client.on("ready", () => {
	isIndeed = false;
	const data = fs.readFileSync("./scribbleNames.json");
	words = JSON.parse(data);
	console.log("Bot is online!");
});

client.on("message", message => {
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
				startRace(args, message, client);
				break;
			case "toggleI":
				if (message.author.id == "539368618006413363") {
					isIndeed = !isIndeed;
					message.reply(isIndeed);
				}
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
	if (isIndeed && message.author.id == "726037232611491852") {
		if (message.content.toLowerCase().includes("aaa")) {
			message.channel.send(
				"https://tenor.com/view/vyx-furry-aaaa-aaaaa-scream-gif-17575013"
			);
		}
		if (
			message.content.toLowerCase() == "in-ded" ||
			message.content.startsWith("inde") ||
			message.content.toLowerCase().startsWith("inde") ||
			message.content.toLowerCase() == "in-deed" ||
			message.content.toLowerCase() == "indid"
		) {
			message.reply("Indeed you are an Idiot !!! :rofl:");
		}
	}
});
client.login(token);
keepAlive();