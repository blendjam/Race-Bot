function showHelp(arg, message) {
  let embedMsg;
  if (!arg) {
    embedMsg = {
      title: "List of Commands",
      fields: [
        {
          name: "`race",
          value: "Start a typing test",
        },
        {
          name: "`baka @mention",
          value: "Send a GIF",
        },
        {
          name: "`avatar @mention",
          value: "To see someone's avatar",
        },
        {
          name: "`abaka <url>",
          value: "Add Url of baka GIF (Admins Only)",
        },
        {
          name: "`help list",
          value: "To see the commands for Scribble List",
        },
      ],
    };
    try {
      message.channel.send({ embed: embedMsg });
    } catch (err) {
      console.log(err);
    }
    return;
  }
  switch (arg) {
    case "list":
      embedMsg = {
        title: "List of Command \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUse Case",
        fields: [
          {
            name:
              "ls\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t `ls",
            value: "To view the list",
          },
          {
            name:
              "dls\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`dls",
            value: "View List with Index",
          },
          {
            name:
              "rml\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`rml",
            value: "Remove Element at last Index",
          },
          {
            name:
              "add\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`add Name",
            value: "To add to the list",
          },
          {
            name:
              "rm\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t `rm Name",
            value: "Remove the specified element",
          },
          {
            name:
              "rmi\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`rmi 12",
            value: "Remove at specific Index",
          },
          {
            name:
              "rep\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`rep Old Word, New Word",
            value: "Replace a word with another word",
          },
          {
            name:
              "repi\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`repi 12, New Word",
            value: "Replace word at specific Index",
          },
        ],
      };
      break;
  }
  try {
    message.channel.send({ embed: embedMsg });
  } catch (err) {
    console.log(err);
  }
}

module.exports = showHelp;
