let dadosPessoas = [
    {
        nome: 'Clara',
        idade: 14
    },
    {
        nome: 'Carlos',
        idade: 26
    },
    {
        nome: 'João',
        idade: 16
    },
    {
        nome: 'Leo',
        idade: 72
    },
    {
        nome: 'Hernani',
        idade: 23
    },
    {
        nome: 'Ki',
        idade: 11
    },
    {
        nome: 'Alfred',
        idade: 90
    },
    {    nome: 'Leticia',
        idade: 18
    }
    ];

// 1- Filtrar as pessoas que têm 18 anos ou mais.
let MaioresDeIdade = dadosPessoas.filter(pessoa => pessoa.idade >= 18);
console.log(MaioresDeIdade)

// 2- Criar um novo array contendo apenas o nome das pessoas.
let NomesDeMaioresDeIdade = MaioresDeIdade.map(pessoa => pessoa.nome);
console.log(NomesDeMaioresDeIdade)

// 3- Ordenar os nomes das pessoas em ordem alfabética.
let NomesOrdemAlfabetica = NomesDeMaioresDeIdade.sort();
console.log(NomesOrdemAlfabetica)