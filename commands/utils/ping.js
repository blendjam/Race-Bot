module.exports.execute = (message, args, fs) => {
    hrStart = process.hrtime();
    message.channel.send("Pong :ping_pong: ").then(msg => {
        const hrEnd = process.hrtime(hrStart);
        const ms = hrEnd[1].toString().slice(0, 3);
        msg.edit(`Pong :ping_pong: \n**${ms}ms**`)
    });
};

module.exports.help = {
    name: "ping",
    usage: "`ping",
    aliases: [],
    category: "utils",
    description: "To Ping LOL",
}