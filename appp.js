
const yargs = require("yargs");
const player = require("./player");
yargs.command({
  command: "add",
  describe: "Adding Players Details",

  builder: {
    id: {
      describe: "This is the player id.",
      type: " number",
      demandOption: true,
    },
    name: {
      describe: "Name of the player",
      type: "string",
      demandOption: true,
    },
    degrees: {
      describe: " player Degrees.",
      type: "array",
      demandOpion: true,
    },
    comment: {
      describe: "Comment on player Degrees.",
      type: "string",
    },
  },

  handler: (S) => {
    const totalDegrees = (degree) => {
      let total = 0;
      degree.forEach((el) => (total += el));
      return total;
    };
    player.addplayer(
      S.id,
      S.name,
      S.degrees,
      S.comment,
      totalDegrees(S.degrees)
    );
  },
});

yargs.command({
  command: "delete",
  description: "Delete a player details.",
  builder: {
    id: {
      describe: "This is the player id.",
      type: " number",
      demandOption: true,
    },
  },
  handler: (S) => {
    player.deleteplayer(S.id);
  },
});

yargs.command({
  command: "read",
  description: "Read a player details.",
  builder: {
    id: {
      describe: "This is the player id.",
      type: " number",
      demandOption: true,
    },
  },
  handler: (S) => {
   player.readStudents(S.id);
  },
});

yargs.command({
  command: "list",
  description: "This is a list of players details.",
  handler: () => {
    player.listStudents();
  },
});