// DO WHILE //

let velocity = 0

do {
    alert ("A velocidade do veículo é " + velocity + " km/h")
    velocity -= 20
} while (velocity > 0)

alert ("Velocidade final: " + velocity + " km/h")


// MENU INTERATIVO //

let NamePerson = prompt("Olá, por favor me informe o seu nome:")
let OptionsInteractive = ""

do {
    OptionsInteractive = parseInt(prompt("Escolha uma das seguintes opções: \n 1- Hamburguer\n 2- Pizza\n 3- Churrasco\n 4- Pastel\n 5- Batata Frita\n 6- Encerrar"));
    switch (OptionsInteractive) {
        case 1:
            alert(NamePerson + " prefere " + "Hambúrguer!\nPrecisa de mais alguma coisa?")
            break;
        case 2:
            alert(NamePerson + " prefere " + "Pizza!\nPrecisa de mais alguma coisa?")
            break;
        case 3:
            alert(NamePerson + " prefere " + "Churrasco!\nPrecisa de mais alguma coisa?")
            break;
        case 4:
            alert(NamePerson + " prefere " + "Pastel!\nPrecisa de mais alguma coisa?")
            break;
        case 5:
            alert(NamePerson + " prefere " + "Batata Frita!\nPrecisa de mais alguma coisa?")
            break;
        case 6:
            alert(NamePerson + " encerrando o programa...")
            break;
        default:
            alert("Você não escolheu nenhuma das opções..")
    }
}    while (OptionsInteractive > 0 && OptionsInteractive < 6);


// CONTROLE FINANCEIRO //

let InitialMoney = parseInt(prompt("Olá, por favor me informe a quantidade inicial de dinheiro:"))
let AddOrRemoveMoney = ""

do {
    AddOrRemoveMoney = parseInt(prompt("Escolha entre as opções:\n 1- Adicionar dinheiro\n 2- Remover dinheiro\n 3- Sacar o dinheiro"))
    switch (AddOrRemoveMoney) {
        case 1:
            AddOrRemoveMoney === 1
            let AddMoney = parseInt(prompt("Quanto você deseja adicionar?"))
            InitialMoney += AddMoney
            alert ("Você possui o valor de " + InitialMoney + " reais")
            break;
        case 2:
            AddOrRemoveMoney === 2
            let RemoveMoney = parseInt(prompt("Quanto você deseja remover?"))
            InitialMoney -= RemoveMoney
            alert ("Você possui o valor de " + InitialMoney + " reais")
            break;
        case 3:
            AddOrRemoveMoney === 3
            alert ("Você está sacando o total de " + InitialMoney + " reais\nEncerrando o programa...")
            break;
        default:
            alert("Você não escolheu nenhuma das opções disponíveis..")
            InitialMoney = parseInt(prompt("Olá, por favor me informe a quantidade inicial de dinheiro:"))
    }

} while (AddOrRemoveMoney > 0 && AddOrRemoveMoney < 3);
