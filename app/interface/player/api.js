module.exports = class MemoryAdapter{
  construtor(){
    this.games = [];
    this.users = [];
    this.players = [];
  }

  exportGame(game){
    this.games.push(game);
  }

  importGame(idGame){
    return this.games.find(game => {
      return game.id === idGame;
    });
  }
}
