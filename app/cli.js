const dotWars = require('dot-wars');

//return id
dotWars.createUser("brab0");

//return idPlayer, idGame
dotWars.createGame(idUser, {
  rows: 10,
  cols: 10,
  dots: 5,
  traps: 1
});

dotWars.addDots(idPlayer, [{
    x: 3,
    y: 4
  }, {
    x: 1,
    y: 2
  }]
);

dotWars.createUser("Thiago");

dotWars.joinGame(idGame, idUser);

dotWars.addDots(idPlayer, [{
    x: 4,
    y: 2
  }, {
    x: 1,
    y: 1
  }]
);

dotWars.isReady(idGame);

dotWars.start(idGame);

dotWars.attack(atacante, atacado, position)
