// Lista de pessoas
const pessoas = [
    { nome: 'Ana', idade: 17 },
    { nome: 'Carlos', idade: 22 },
    { nome: 'Mariana', idade: 19 },
    { nome: 'José', idade: 16 },
    { nome: 'Fernanda', idade: 25 }
  ];
  
  // 1. Filtrar as pessoas maiores de 18 anos
  const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
  
  // 2. Criar um novo array com apenas os nomes
  const nomesMaioresDeIdade = maioresDeIdade.map(pessoa => pessoa.nome);
  
  // 3. Ordenar os nomes em ordem alfabética
  const nomesOrdenados = nomesMaioresDeIdade.sort();
  
  // Exibir o resultado
//   console.log(nomesOrdenados);

console.log(maioresDeIdade);
  