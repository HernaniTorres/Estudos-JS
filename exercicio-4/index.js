// EXEMPLO WHILE //

// let velocity = 100

// while (velocity > 0) {
//     alert("O carro está á " + velocity + " km/h")
//     velocity -= 20
//     alert("Diminuindo em 20km/h..")
// }

// alert ("O carro parou.")

// VISITANDO CIDADES //

let NamePerson = prompt("Por favor, digite o seu nome:")
let AskVisitation = prompt("Você já visitou alguma cidade?\n\n1-Sim\n2-Não")
let NameOfCity = ""
let QuantitiesCity = ""
let CitiesVisited = ""

while (AskVisitation == 1) {
    NameOfCity = prompt("Qual o nome da cidade que você visitou?")
    QuantitiesCity ++
    CitiesVisited += "\n- " + NameOfCity
    AskVisitation = prompt("Você visitou mais alguma cidade?\n\n1-Sim\n2-Não")
    if (AskVisitation == 2) {
        alert(NamePerson + "\nQuantidade de cidades visitadas: " + QuantitiesCity + "\nNomes das cidades: " + CitiesVisited)
    }
}