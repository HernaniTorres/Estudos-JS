const base = require('./database')

// 8- Para cada personagem imprima uma frase da seguinte forma:
    // Parte 1: {NOME} é da espécie {ID ESPÉCIE}.
    // Parte 2: {NOME} é da espécie {NOME ESPÉCIE}.

function information () {
    return base.characters.map((character) => {
        const specieName = base.species.find((specie) => specie.id === character.speciesId);
        return `${character.name} é da especíe ${specieName.name}`;
    }
)}

console.log(information());