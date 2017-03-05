import User from '../user';
import Game from '../game';
import {test} from 'ava';
import chai from 'chai';

let should = chai.should();

test('cria novo usuário com sucesso', assert => {

  const user = new User('Rick Sanches');

  assert.is(user.name, 'Rick Sanches', 'diff names.');
  assert.is(typeof user.id, 'string', 'diff type.');

});

test('cria novo jogo', assert => {

  const user = new User('Rick Sanches');
  const game = new Game(user, {
    rows: 15,
    cols: 15
  }, {
    maxPlayers: 2,
    maxDots: 5,
    maxTraps: 1
  });

  should(game).to.deep.equal({
    players: [user],
    battlefield: {
      rows: 15,
      cols: 15
    },
    config: {
      maxPlayers: 2,
      maxDots: 5,
      maxTraps: 1
    }
  });

});
