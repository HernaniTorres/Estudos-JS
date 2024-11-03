// EXEMPLO DE SWITCH //

// let resultado = 4

// switch (resultado) {
//     case 1:
//         alert("O resultado é '1'")
//         break
//     case 2:
//         alert("O resultado é '2'")
//         break
//     case 3:
//         alert("O resultado é '3'")
//         break
//     default:
//         alert("Finalizando...")
//     }

// CONVERSOR DE MEDIDAS //

let QuestionValue = parseFloat(prompt("Por favor, digite o valor desejado em Metros!"));
let QuestionUnityOfMeasure = parseFloat(prompt("Qual unidade de medida deseja converter o valor informado?\n" + "1- Milímetro (MM)\n" +
    "2- Centímetro (CM)\n" + "3- Decímetro (DM)\n" + "4- Decâmetro (DAM)\n" + "5- Hectômetro (HM)\n" + "6- Quilômetro (KM)"
))

console.log(QuestionValue);
console.log(QuestionUnityOfMeasure);

switch (QuestionUnityOfMeasure) {
    case 1:
        alert(QuestionValue = QuestionValue * 1000 + " este é o valor em Milímetros (MM)!")
        break;
    case 2:
        alert(QuestionValue = QuestionValue * 100 + " este é o valor em Centímetros (MM)!")
        break;
    case 3:
        alert(QuestionValue = QuestionValue * 10 + " este é o valor em Decímetros (DM)!")
        break;
    case 4:
        alert(QuestionValue = QuestionValue / 10 + " este é o valor em Decâmetros (DAM)!")
        break;
    case 5:
        alert(QuestionValue = QuestionValue / 100 + " este é o valor em Hectômetros (HM)!")
        break;
    case 6:
        alert(QuestionValue = QuestionValue / 1000 + " este é o valor em Quilômetros (KM)!")
        break;
    default:
    alert("Você não escolheu nenhuma das opções informadas!");
}   