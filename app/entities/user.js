const generateUUID = require('uuid/v4');

module.exports = class User {

  constructor(name){
    this.id = generateUUID();
    this.name = name;
  }
  
}
