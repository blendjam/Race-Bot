
module.exports.execute = (message, args, bot) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;

    if (!args[1]) {
        message.reply("Specify da numbers")
        return;
    }

    let amount = parseInt(args[1]);

    if (amount > 99) {
        message.reply("Can't delete more than 99");
        return;
    }

    message.channel.messages.fetch({ limit: 100 }).then(messages => {
        if (message.mentions.users.first() && message.mentions.users.first().id != message.author.id) {
            const user = message.mentions.users.first();
            amount = messages.filter(m => m.author.id === user.id).array().slice(0, amount);
            message.delete({ timeout: 1000 });
        } else amount++;

        message.channel.bulkDelete(amount).catch(err => message.reply("The right usage is `del 10 @mention"));
    })

};

module.exports.help = {
    name: "del",
    category: "admin",
    aliases: ["purge", "delete"],
    usage: "`del <number> @mention",
    description: "To delete msg of mentioned person",
}