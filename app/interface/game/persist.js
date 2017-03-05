module.exports = class MemoryAdapter{
  construtor(){
    this.games = [];
    this.users = [];
    this.players = [];
  }

  createGame(game){
    this.games.push(game);
  }

  getGame(game){
    this.games.push(game);
  }

  getStatusGame(game){
    persist.getStatusGame(game);
  }
}
