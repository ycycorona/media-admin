const BaseModel = require('./base_model');

const PersonEntity = require('./entity/Person.js');

module.exports = class Person extends BaseModel {
  constructor(...args) {
    super(...args);
  }
};
