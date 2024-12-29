const base = require('./database')

// 3- Mostre o primeiro personagem de acordo com o id da espécie //

function getCharacterBySpecie (id) {
    return base.characters.find((specie) => {
        return specie.speciesId === id;
    })
}

console.log(getCharacterBySpecie(1));