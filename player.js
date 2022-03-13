const fs = require("fs");

const addplayer = (id, name, degrees, comment, total) => {
  const players = loadplayers();
  const duplicateId = players.filter((player) => {
    return player.id === id;
  });

  if (duplicateId.length == 0) {
    players.push({
      id,
      name,
      degrees,
      comment,
      total,
    });

    savePlayers(players);
    console.log("player saved successfully.");
  } else {
    console.log("player is already present.");
  }
};

const loadplayers = () => {
  try {
    const data = fs.readFileSync("players.json").toString();
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const saveplayer = (player) => {
  const dataSave = JSON.stringify(players);
  fs.writeFileSync("players.json", dataSave);
};


const deleteplayer = (id) => {
  const players = loadplayers();
  const playerToRemain = players.filter((stud) => {
    return player.id !== id;
  });
  saveplayer(playerToRemain);
  console.log("player Deleted");
};


const readPlayers = (id) => {
  const players= loadplayers();
  const player = players.find((stud) => {
    return player.id == id;
  });

  if (player) {
    console.log(` ID:${player.id}, Name:${ player.name}`);
  } else {
    console.log("Not Found.");
  }
};

const listPlayers = () => {
  const players = loadplayers();
  players.forEach((el) => {
    console.log(`player Name is ${el.name}, player ID is ${el.id} `);
  });
};
module.exports = {
  addplayer,
  deleteplayer,
  readPlayers,
  listPlayers,
};

