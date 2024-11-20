let ObjectStudents = {}
let ArrayStudents = []
let Options
let StudentsConfirmed = 0

do {
    Options = parseInt(prompt("Olá, seja bem vindo (a) ao sistema de notas!\n\n Aluno cadastrados: " + StudentsConfirmed + "\n\nO que deseja fazer?\n\n" + 
        "1- Cadastrar novo aluno\n2- Consultar alunos cadastrados\n3- Sair do programa"
    ))

    switch (Options) {
        case 1:
        ObjectStudents.name = prompt("Me informe o nome do aluno:")
        ObjectStudents.notationOne = prompt("Me informe a 1º nota do aluno:" + "\n\nSe houver casa decimal, utilize pontos (Ex.: 6.7, 5.4)")
        ObjectStudents.notationSecond = prompt("Me informe a 2º nota do aluno:" + "\n\nSe houver casa decimal, utilize pontos (Ex.: 2.3, 4.1)")
        ArrayStudents.push({...ObjectStudents})
        console.log(ArrayStudents)
        StudentsConfirmed++
        alert("Aluno cadastrado com sucesso!")
        break;

        case 2:
            for (let i = 0; i < ArrayStudents.length; i++) {
                let notationOne = parseFloat(ArrayStudents[i].notationOne)
                let notationSecond = parseFloat(ArrayStudents[i].notationSecond)
                let AverageMedia = (notationOne + notationSecond) / 2
                let ToFixedMedia = Math.round(AverageMedia * 10) / 10
                console.log(ToFixedMedia)
                alert("Detalhes dos alunos cadastrados:" +
                    "\n\nNome: " + ArrayStudents[i].name + "\nPrimeira nota: " + ArrayStudents[i].notationOne + 
                    "\nSegunda nota: " + ArrayStudents[i].notationSecond + "\nMédia do aluno: " + ToFixedMedia
                )
            }
        break;

        case 3:
            alert("Encerrando o programa..!")
        break;
        default:
            alert ("Você não escolheu nenhuma das opções disponíveis\n\nRetornando ao início..")
    }

} while (Options !== 3)