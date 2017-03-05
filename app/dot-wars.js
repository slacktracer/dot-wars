const persist = new Persist();

module.exports.createUser = (name) => {
  const user = new User(name);
}

module.exports.createGame = (idUser, config) => {
  return new Game(idUser, config);
}

module.exports.addDots = (idPlayer, dots) => {

}

module.exports.joinGame = (idGame, idUser) => {

}

module.exports.isReady = (idGame) => {

}

module.exports.start = (idGame) => {

}

module.exports.status = (idGame) => {

}

module.exports.attack = (atacante, atacado, position) => {

}
