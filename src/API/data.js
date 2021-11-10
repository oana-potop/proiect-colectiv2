const users = require('./users.json');
const classes = require('./classes.json');
const races = require('./races.json');
const armors = require('./armors.json');
const weapons = require('./weapons.json');
const savingThrows = require('./savingThrows.json');
const skills = require('./skills.json');
const alignments = require('./alignments.json');
const characters = require('./characters.json');
const backgrounds = require('./backgrounds.json');

module.exports = () => ({
  users: users,
  classes: classes,
  races: races,
  armors: armors,
  weapons: weapons,
  savingThrows: savingThrows,
  skills: skills,
  alignments: alignments,
  characters: characters,
  backgrounds: backgrounds
});