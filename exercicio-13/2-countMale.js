const base = require('./database.js')

// 2- Contar a quantidade de personagens através do sexo //

function countGender (gender) {
    if (gender === 'M' || gender === 'F') {
        return base.characters.filter((character) => {
            return character.gender === gender;
        }).length;
    } else {
        return "Valor inválido";
    }
}

console.log(countGender('M'));