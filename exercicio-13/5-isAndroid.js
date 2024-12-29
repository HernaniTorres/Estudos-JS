const base = require('./database');

//5 - Imprimir se existe algum personagem de uma determinada espécie. True ou False. Caso o retorno seja True, traga os nomes de todos os personagens desta espécie.

function isAndroide(specie) {
  let names = [];
  if(base.species.some((specieSome) => specieSome.name === specie) === true){
    let findId = base.species.find((findId) => findId.name === specie);
    for(let index = 0; index < base.characters.length; index += 1){
      if(findId.id === base.characters[index].speciesId){
        names.push(base.characters[index].name);
      }
    }
  } else {
    console.log('Espécie não encontrada');
  }
  return names;
}

console.log(isAndroide("Saiyans"));
