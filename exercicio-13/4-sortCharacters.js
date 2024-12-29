const base = require('./database')

// 4- Ordenar os personagens através de um parâmetro //

const ordered = base.characters.sort((a,b) => {
    return a.gender.localeCompare(b.gender);
})

console.log(ordered);