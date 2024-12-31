let livros = [
    {titulo: 'O Pequeno Principe', autor: 'Cazalbé', páginas: 400},
    {titulo: 'A procura de Rebeca', autor: 'Paulo Junior', páginas: 190},
    {titulo: 'A grande comissão', autor: 'C.H Spurgeon', páginas: 190},
    {titulo: 'Biblia Sagrada', autor: 'Deus', páginas: 800},
    {titulo: 'Eles precisam saber', autor: 'Luca Martini', páginas: 200}
]

// 1-Usar o find para encontrar o primeiro livro que tenha mais de 200 páginas.
function BookMoreThan200 () {
    return livros.find((página => {
        return página.páginas >= 200
    }))
}
console.log(BookMoreThan200())

// 2-Usar o forEach para exibir os títulos de todos os livros.
livros.forEach(titulo => {
    console.log(`título do livro: ${titulo.titulo}`)
})

// 3-Usar o every para verificar se todos os livros têm mais de 50 páginas.
let PagesMoreThan50 = livros.every((paginaMaior => paginaMaior.páginas > 50));
if (PagesMoreThan50) {
    console.log('Todos os livros tem mais que 50 páginas')
} else {
    console.log ('Nem todos os livros tem mais que 50 páginas')
}
