let Objects = {}
let Arrays = []
let Options = ""
let QtdRefresh = 0

do {
    Options = parseInt(prompt("Olá, bem vindo (a) ao seu estoque!\nO que deseja fazer?\n\n" + "Esta é a quantidade de produtos em estoque: " +
        QtdRefresh + "\n1- Cadastrar novo produto\n2- Consultar detalhes de estoque\n3- Encerrar o programa"
    ))
    switch (Options) {
        case 1:
            Objects.nome = prompt("Qual o nome do produto?")
            Objects.valor = parseInt(prompt("Qual o valor do produto?"))
            Objects.qtd = parseInt(prompt("Qual a quantidade do produto?"))
            Arrays.push({...Objects})
            QtdRefresh += Objects.qtd
            alert("Produto cadastrado com sucesso!")
        break;  

        case 2:
            for (let i = 0; i < Arrays.length; i++) {
                alert("Consulta realizada. Segue os produtos do estoque:\n\n" +
                      "Nome do produto: " + Arrays[i].nome +
                      "\nQuantidade: " + Arrays[i].qtd +
                      "\nValor (5 unidades): R$ " + Arrays[i].valor + ",00"
                )
                let TotalValue =+ Arrays[i].qtd * Arrays[i].valor
                alert(Arrays[i].nome + "\nSaldo de estoque: R$ " + TotalValue)
            }
        break;

        case 3:
            alert("Encerrando o programa..!")
        break;

        default:
            alert("Opção inválida..!")
        break;
    }

} while (Options !== 3)
