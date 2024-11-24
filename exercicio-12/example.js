// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função

function dobro(x) {
    console.log("O dobre de " + x + " é " + (x * 2))
}
dobro(5)
dobro(7)

// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
dobro()

// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined

function dizerOla(nome = "mundo") {
    console.log("Olá, " + nome + "!")
}
dizerOla("Isaac")
dizerOla()

// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula

function soma(a, b) {
    console.log(a + b)
}
soma(1, 1)
soma(34, 5)

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último

function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
}

criarUsuario("Isaac", "isaac@email.com", "1234")
novoUsuario("Isaac", "isaac@email.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto

function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}
function parametrosDoJeitoCerto(usuario) {
    // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante

parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)

// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
    const media = (a + b) / 2
}
const resultado = calcularMedia(5, 9)
console.log(resultado)

// Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
    const produto = { nome, preco, estoque: 1 }
    return produto
}
const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
console.log(notebook)


// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Smartphone Samsung Galaxy", 1000))

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
    return base * altura
}
console.log(areaRetangular(3, 5))
// Ou até o retorno de outra função
function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}
console.log(areaQuadrada(8))

// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
    let texto = "..."
    return texto
    texto = "Olá, mundo!"
    console.log(texto)
}
console.log(olaMundo())

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(maioridade(20))
console.log(maioridade(13))

// Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
    pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
function criarAnimal() {
    let animal = "Gato"
}

criarAnimal()
console.log(animal) // Gera erro

// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = "Aprovado"
    } else {
        var aprovado = false
        let situacao = "Reprovado"
    }

    console.log(nota)
    console.log(aprovado)
    console.log(situacao) // Gera erro
}
avaliarNota(83)
avaliarNota(49)

// Mas mesmo o var não consegue "sair" para fora do escopo da função
function ola() {
    var texto = "Olá, mundo!"
}
console.log(texto) // Gera erro

// Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto
console.log(nome)
console.log(sobrenome)
var nome = "Isaac"
let sobrenome = "Pontes"
console.log(nome)
console.log(sobrenome)

// Função recursiva é uma função que chama ela mesma repetidamente
function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {
      dividir(num / 2)
    } else {
      return num
    }
  }
  dividir(256)

  // É fundamental que uma função recursiva tenha uma forma de parar de chamar novas funções
function dobrar(num) {
    console.log(num)
    dobrar(num * 2)
  }
  dobrar(1) // Estoura a pilha de chamadas

  // Para construir uma função recursiva, geralmente partimos de um caso de base
// para garantir que nossa função não vai continuar se chamando para sempre
// Obs.: !5 (fatorial de 5) = 5 * 4 * 3 * 2 * 1 = 5 * !4
function fatorial(num) {
    console.log("num = " + num)
    if (num === 0) { // caso base
      return 1
    } else if (num === 1) { // caso base
      return 1
    } else {
      console.log(num + " * !" + (num - 1))
      return num * fatorial(num - 1)
    }
  }

console.log("\n!5 = " + fatorial(5))
console.log("\n!0 = " + fatorial(0))
console.log("\n!9 = " + fatorial(9))

// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores
function somar(a, b) {
    return a + b
  }
  // Repare que não usamos os () ao lado do nome da função,
  // porque ao fazer isso estaríamos executando a função
  const operacao = somar
  console.log(operacao(4, 5))

  // Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome
const subtrair = function (a, b) {
    return a - b
  }
  console.log(subtrair(36, 13))

  // Com as funções anônimas podemos, por exemplo,SS
// atribuir uma função a uma chave de objeto
const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))

// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo()
oiMundo()

function olaMundo() {
  console.log("Olá, mundo!")
}

const oiMundo = function () {
  console.log("Oi, mundo!")
}