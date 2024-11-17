// const arr = ["Frodo", "Sam", "Merry"]

// // push: Adiciona um elemento no final do array e devolve o novo tamanho do array
// let tamanho = arr.push("Boromir")
// console.log(arr)
// console.log(tamanho)

// // unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
// tamanho = arr.unshift("Boromir")
// console.log(arr)
// console.log(tamanho)

// // pop: Remove um elemento no final do array e devolve o elemento removido
// let elementoRemovido = arr.pop("Boromir")
// console.log(arr)
// console.log(elementoRemovido)

// // shift: Remove um elemento no começo do array e devolve o elemento removido
// elementoRemovido = arr.shift("Boromir")
// console.log(arr)
// console.log(elementoRemovido)

// // includes: Verifica se um certo elemento está presente no array 
// const inclui = arr.includes("Gandalf")
// console.log(inclui)

// // indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
// const indice = arr.indexOf("Gandalf")
// console.log(indice)

// // slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
// const hobbits = arr.slice(0, 4)
// // Também pode ser usado com números negativos referenciar o final do array
// const outros = arr.slice(-4)
// console.log(arr)
// console.log(hobbits)
// console.log(outros)

// // concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
// const sociedade = hobbits.concat(outros, "Boromir")
// console.log(sociedade)
// console.log(hobbits)
// console.log(outros)

// // splice: Permite remover elementos em qualquer posição do array e substituir por novos
// const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
// console.log(elementosRemovidos)
// console.log(sociedade)

// Usando o for para percorrer cada elemento do array
// for (let indice = 0; indice < sociedade.length; indice++) {
//     const elemento = sociedade[indice]
//     console.log(elemento + " se encontra na posição " + indice)
//   }


// FILA DE ESPERA //

// let NewPacient = ""
// let NewListOfPacients = ""
// let PositionPacients = ""
// let ListOfPacients = ["Mateus", "Marcos", "Lucia", "Ana"];

// do {
//     PositionPacients = "";
//     for (let i = 0; i < ListOfPacients.length; i++) {
//         PositionPacients += ListOfPacients[i] + " está na posição: " + i + "\n"
//     }

//     alert("Esta é a lista dos pacientes:\n\n" + PositionPacients) 
//     NewPacient = parseInt(prompt("Escolha entre as seguintes opções:\n\n 1- Novo Paciente\n 2- Consultar Paciente\n 3- Sair"))

//     switch (NewPacient) {
//         case 1:
//         let NameOfNewPacient = prompt("Qual o nome do novo paciente?")
//         ListOfPacients.push(NameOfNewPacient);
//         break;
//         case 2:
//         if (ListOfPacients.length > 0) {
//             let ConsultOfPacient = ListOfPacients.shift();
//             alert(ConsultOfPacient + " é o primeiro paciente da lista!");
//         } else {
//             alert("Não há pacientes na lista!");
//         }
//         break;
//         case 3:
//             alert("Saindo...");
//         break;
//         default: alert("Você não escolheu nenhuma das opções, reinicie o programa!")
//     }
    
// } while (NewPacient !== 3);


// PILHA DE CARTAS //

let QuantityCards = ["04 ouros", "02 espadas", "03 copas"]
let Decision = ""
let NameOfNewCard = ""


do {
    alert("Temos no baralho: \n\n" + QuantityCards);
    Decision = parseInt(prompt("O que deseja fazer: \n\n 1- Adicionar uma carta\n 2- Puxar uma carta\n 3- Sair"))
    switch (Decision) {
        case 1:
            NameOfNewCard = prompt("Qual o naipe e o número da carta?")
            QuantityCards.unshift(NameOfNewCard);
        break;

        case 2:
            NameOfNewCard += QuantityCards
            let RemovingCard = QuantityCards.shift(NameOfNewCard)
            alert("Esta é a primeira carta:\n\n" + RemovingCard)
        break;

        case 3: 
            alert("Encerrando o programa!")
        break;
        default:
        alert("Você não escolheu nenhuma das opções..!")
    }

}  while (Decision > 0 && Decision < 3)
