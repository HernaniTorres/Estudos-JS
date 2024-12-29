const base = require('./database');

// 1- Crie uma função que mostre a quantidade de personagens //

function countCharacters () {
    return base.characters.length;
}

console.log(countCharacters());