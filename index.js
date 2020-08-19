const Discord = require("discord.js");
const fs = require("fs");
const keepAlive = require("./server.js");
const { TOKEN, PREFIX, variables } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync("./commands")
	.filter(file => file.endsWith(".js"));

commandFiles.forEach(file => {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
});

client.on("ready", async () => {
	console.log("Bot is online!");
	client.user.setActivity(" `help", { type: "WATCHING" });
});

client.on("message", message => {
	let args = message.content.substring(PREFIX.length).split(" ");
	const command = args[0];

	if (variables.isBee && message.author.id == "667444572632121375") {
		if (message.content == "yes ma'am") {
			message.channel.reply(
				"https://tenor.com/view/hug-virtual-hug-hug-sent-gif-5026057"
			);
		}
	}
	
	if (variables.isDaWoo && message.author.id == "259442331902541825") {
		if (message.content.toLowerCase().startsWith("da")) {
			const person = message.content.split(" ")[1];
			message.channel.send(`Da \`${person}\` run while you can he's gonna get you`);
		}
	}
	if (message.author.id == "726037232611491852") {
		if (variables.isAA && message.content.toLowerCase().includes("aaa")) {
			message.channel.send(
				"https://tenor.com/view/vyx-furry-aaaa-aaaaa-scream-gif-17575013"
			);
		}
	}

	if (message.content.startsWith(PREFIX)) {
		if (
			message.author.id == "551615059030179861" ||
			message.author.id == "505368807037206558" ||
			message.author.id == "621977065712910336"
		) {
			client.commands.get("Scribble").execute(message, args, fs);
		}
		
		if (!client.commands.has(command)) return;

		try {
			client.commands.get(command).execute(message, args, fs);
		} catch (err) {
			console.log(err);
			message.reply("There was an error executing the command");
		}
	}
});
keepAlive();
client.login(TOKEN);
