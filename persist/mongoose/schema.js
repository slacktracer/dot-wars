'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let BoilerplateScheme = new mongoose.Schema({
    name : {
      type: String,
      default: ""
    },
    created: {
      type: Date,
      default: Date.now
    }
});

BoilerplateScheme.statics.getAll = () => {
  let boilerplate = mongoose.model('Boilerplate');

  return new Promise((resolve, reject) => {
    boilerplate.find({},
      (err, data) => {
        resolve({
          err : err,
          data : data
        });
    });
  });
};

BoilerplateScheme.statics.getById = (id) => {
  let boilerplate = mongoose.model('Boilerplate');

  return new Promise((resolve, reject) => {
    boilerplate.findOne({
      id : id
    }, (err, data) => {
      resolve({
        err : err,
        data : data
      });
    });
  });
};

BoilerplateScheme.methods.add = () => {
  let boilerplate = this;

  boilerplate.save();
};

BoilerplateScheme.methods.updateById = (id) => {
  let boilerplate = this;

  return new Promise((resolve, reject) => {
    boilerplate.save((err, data) => {
      resolve({
        err : err,
        data : data
      });
    });
  });
};

BoilerplateScheme.methods.removeById = (id) => {
  let boilerplate = mongoose.model('Boilerplate');

  return boilerplate.remove({
    id : id
  });
};

mongoose.model('Boilerplate', BoilerplateScheme);
