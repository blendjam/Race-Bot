import nodeFetch from "node-fetch";
import questions from "./questions.js";

function startRace(args, message, bot) {
  message.reply("\n Race Starting in");
  let countDown = 3;
  let counter = setInterval(() => {
    message.channel.send(countDown);
    countDown--;
    if (countDown === 0) {
      clearInterval(counter);
      const randomIndex = Math.floor(Math.random() * questions.length);
      const questionText = questions[randomIndex].text;
      message.channel.send("Type this fast !!```" + questionText + "```");
      const hrStart = process.hrtime();

      const filter = m => m.author.id === message.author.id;
      const collector = message.channel.createMessageCollector(filter, {
        time: 50000,
      });

      let text, accuracy;

      collector.on("collect", msg => {
        let count = 0;
        let error = 0;
        text = msg.content;
        for (let i = 0; i < msg.content.length; i++) {
          if (!questionText[i]) break;
          if (msg.content[i] === questionText[i]) count++;
          else error++;
        }
        let accuracy = (count / questionText.length) * 100;
        const hrEnd = process.hrtime(hrStart);
        const seconds = `${hrEnd[0]}.${hrEnd[1].toString().slice(0, 3)}`;
        const wpm = (questionText.length / (5 * seconds)) * 60;
        let netWpm = wpm - (error / seconds) * 60;
        if (netWpm < 0) netWpm = wpm;
        const userEmbed = {
          color: 0x0099ff,
          title: "Race Results",
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL(),
          },
          description: "Your race results are",
          fields: [
            {
              name: "Time: ",
              value: seconds,
              inline: true,
            },
            {
              name: "Accuracy",
              value: `${accuracy.toFixed(3)}%`,
              inline: true,
            },
            {
              name: "Net WPM: ",
              value: netWpm.toFixed(3),
            },
          ],
        };
        message.channel.send({ embed: userEmbed });
        msg.delete();
        collector.stop();
        if (accuracy < 50) {
          message.reply("NOOB! Practice");
        } else if (accuracy < 20) {
          message.reply("Super Duper NOOB! Practice");
        }
      });

      collector.on("end", collected => {
        if (accuracy < 40) {
          message.reply("Accuracy was too low. Practice You NOOB!");
        }
        if (!text) message.reply("Noob! atleast type something");
      });
    }
  }, 1000);
}

export default startRace;
