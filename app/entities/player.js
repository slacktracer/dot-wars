const generateUUID = require('uuid/v4');

module.exports = class Player {

  constructor(user, maxDots, idGame){
    this.id = generateUUID();
    this.idGame = idGame;
    this.idUser = user.id;
    this.name = user.name;
    this.points = 0;
    this.alive = true;
    this.maxDots = 5 || maxDots;

    this.dots = []
  }

  addDots(dots) {
    dots.forEach(dot => this.addDot)
  }

  addDot(dot) {
    if (this.dots.length <= this.maxDots) this.dots.push(dot)
    else throw new Error('Max dots exceeded!')
  }

}
