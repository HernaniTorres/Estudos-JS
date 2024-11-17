// CADASTRO DE IMÓVEIS //

let QuantityProperty = [0]
let NewOption = ""
let NewPropertyObject
let NewPropertyArray = []


do {
    NewOption = parseInt(prompt("Imóveis cadastrados: " + QuantityProperty + "\n\nEscolha entre as opções:\n\n" +
        "1- Cadastrar um novo imóvel\n2- Consultar imóveis\n3- Sair do programa"))
    switch (NewOption) {
        case 1:
            let NewNameProperty = prompt("Informe o nome do proprietário:")
            let QuantityBedroom = prompt("Informe a quantidade de quartos:")
            let QuantityBathroom = prompt("Informe a quantidade de banheiros:")
            let AskGarage = prompt("Possui garagem?\n\n1-Sim\n2-Não")
            if (AskGarage == 1) {
                AskGarage = "Sim"
            } else {
                AskGarage = "Não"
            }
            function NewProperty() {
                NewPropertyObject = {
                    nome: NewNameProperty,
                    quartos: QuantityBedroom,
                    banheiros: QuantityBathroom,
                    garagem: AskGarage
                };
            }
            NewProperty()
            NewPropertyArray.push(NewPropertyObject)
            console.log(NewPropertyObject)
            QuantityProperty++
            break;
        case 2:
            for (let i = 0; i < NewPropertyArray.length; i++) {
                alert("Imóvel: " + (i + 1) + "\nProprietário: " + NewPropertyArray[i].nome +
                    "\nQuartos: " + NewPropertyArray[i].quartos +
                    "\nBanheiros: " + NewPropertyArray[i].banheiros +
                    "\nPossui Garagem: " + NewPropertyArray[i].garagem)
            }
            break;
        case 3:
            alert("Encerrando o programa..")
            break;
        default:
            alert("Você não escolheu nenhuma opção disponível!\n\nRetornando ao início!!")
            break;
    }

} while (NewOption !== 3);


