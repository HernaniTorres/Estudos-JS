const base = require('./database')

// 6- Imprima todos os nomes das espécies //

function speciesNames () {
    return base.species.reduce((prev, curr) => {
        return [...prev, curr.name];
    },[]);
}

console.log(speciesNames())