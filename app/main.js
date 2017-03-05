const User = require('./user')
const Game = require('./game')
const Player = require('./player')

const userA = new User('Rick Sanches');

const game = new Game(userA, {
  rows: 15,
  cols: 15
}, {
  maxPlayers: 2,
  maxDots: 5,
  maxTraps: 1
});

const playerA = game.creator

console.log(game.creator.id);
console.log(game.id);

const userB = new User('Morty Sanches');

const playerB = game.addPlayer(userB, game.maxDots, game.id);

playerA.addDots([new Dot()])
