const generateUUID = require('uuid/v4');
const Player = require('./player')

module.exports = class Game {

  constructor(user, battlefield, config){
    this.id = generateUUID();
    this.players = [];

    this.battlefield = {
      rows: battlefield.rows || 10,
      cols: battlefield.cols || 10
    };

    this.config = {
      maxPlayers: config.maxPlayers || 2,
      maxDots: config.maxDots || 5,
      maxTraps: config.maxTraps || 1
    };

    const creator = this.addPlayer(user);

    this.creator = creator.id;
  }

  addPlayer(user, dots){
    let player;
    if(this.players.length <= this.config.maxPlayers){

      player = new Player(user, this.config.maxDots, this.id)

      this.players.push(player);

    } else {
      throw new Error("oops, max players exceed!");
    }
    return player;
  }

}
