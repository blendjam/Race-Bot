
module.exports = {
    name: "dwoo",
    description: "To delete the woo's msgs",
    execute(message, args, fs) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;

        if (!args[1]) {
            message.reply("Specify da numbers")
            return;
        }
        const amount = parseInt(args[1]) + 1;

        message.channel.messages.fetch({ limit: 100 }).then(messages => {
            const filterBy = "259442331902541825";
            messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
            message.channel.bulkDelete(messages).then(() => message.delete()).catch(error => console.log(error.stack));
        })

    }
}