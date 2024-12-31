const base = require('./database')

// 7- Verificar se o personagem possui poderes ou não. Adicionar a propriedade isFighter com o valor true (para quando tiver poderes)
// ou false (quando não tiver poderes). Faça isso para todos os personagens.

function isFighter () {
    base.characters.forEach((character) => {
        if (character.powers.length === 0) {
            character.isFigther = false;
        } else {
            character.isFighter = true;
        }
    })
    return base.characters
}

console.log(isFighter());