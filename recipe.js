const db = require('./dbConfig');
const Sequelize = require('sequelize');
const { STRING } = Sequelize;

//YOUR CODE GOES HERE
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres:/localhost/sequelize_stretch', {
  logging: false
});
const Recipe = conn.define('recipe', {
  name: {
    type: STRING,
    defaultValue: 'cereal'
  }
})

//--------------------
module.exports = Recipe;
