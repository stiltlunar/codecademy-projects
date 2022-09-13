const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const moveOptions = ['up', 'down', 'left', 'right']

class Field {
  constructor(field) {
    this.field = field;
  }

  print() {
    console.log(toString(this.field));
  }
}

const getDirection = prompt('Where would you like to go?')