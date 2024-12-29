// let ArrayCandidates = []
// let ObjectCandidates = {
//     nomeVaga: "",
//     id: 0,
//     quantidade: 0,
//     descricao: "",
//     dataLimite: "",
//     nomeCandidato: ""
// }

// let option 

// do {
//     option = parseInt(prompt("Olá usuário (a), bem vindo ao sistema de vagas de empregos!\n" + 
//         "Escolha entre as opções disponíveis:\n\n" + 
//         "1- Vagas disponíveis\n" + 
//         "2- Criar uma vaga\n" + 
//         "3- Visualizar uma vaga\n" + 
//         "4- Inscrever um candidato em uma vaga\n" + 
//         "5- Excluir uma vaga\n" + 
//         "6- Sair do programa"
//     ))
//     switch (option) {
//         case 1:
//             function ShowVacancy(candidate) {
//                 alert("Nome da vaga: " + candidate.nomeVaga +
//                     "\nID: " + candidate.id + 
//                     "\nQuantidade de inscritos: " + candidate.quantidade)
//             }
            
//             if (!ArrayCandidates.length) {
//                 alert("Não há vagas disponíveis!")
//             } else {
//                 ArrayCandidates.forEach(ShowVacancy)
//             }
//             console.log(ArrayCandidates)
//         break;

//         case 2:
//             ObjectCandidates.nomeVaga = prompt("Informe o nome do cargo:\nEx:. Analista Comercial")
//             ObjectCandidates.descricao = prompt("Informe a descrição da vaga:\nEx:. Auxilia no pagamento de contas, emissão de Notas Fiscais e controle de finanças.")
//             ObjectCandidates.dataLimite = prompt("Informe uma data limite:\nEx:. 30.11.2024")
//             ObjectCandidates.id++
//             let ConfirmationVacancy = confirm("Informações da vaga:\n\n" + 
//                 "Nome do cargo: " + ObjectCandidates.nomeVaga + 
//                 "\nDescrição da vaga: " + ObjectCandidates.descricao + 
//                 "\nData limite: " + ObjectCandidates.dataLimite + 
//                 "\n\n Deseja salvar as informações?"
//             )
//             if (ConfirmationVacancy) {
//                 ArrayCandidates.push({...ObjectCandidates})
//                 alert("Informações salva com sucesso!")
//             } else {
//                 alert("Certo, retornando ao início..")
//             }
//             console.log(ArrayCandidates)
//         break;

//         case 3:
//             let VerificationVacancy = false;
//             let QuestionID = parseInt(prompt("Informe o ID da vaga:"))
//             for (let i = 0; i < ArrayCandidates.length; i++) {
//                 if (QuestionID === ArrayCandidates[i].id) {
//                     alert ("Informações da vaga:\n\n" + 
//                     "Nome da vaga: " + ArrayCandidates[i].nomeVaga +
//                     "\nDescrição da vaga: " + ArrayCandidates[i].descricao +
//                     "\nData limite: " + ArrayCandidates[i].dataLimite +
//                     "\nQuantidade de candidatos: " + ArrayCandidates[i].quantidade +
//                     "\nNome dos candidatos: " + ArrayCandidates[i].nomeCandidato)
//                 VerificationVacancy = true;
//             } 
//         } 
//             if (!VerificationVacancy) {
//                 alert("ID inválido!\nRetornando ao menu..")
//         }
//         console.log(ArrayCandidates)
//         break;

//         case 4:
//         ObjectCandidates.quantidade = ObjectCandidates.quantidade || 0;

//         ObjectCandidates.nomeCandidato = prompt("Informe o nome do candidato: ");
//         let IDQuestion = parseInt(prompt("Informe o ID da vaga: "));
//         ObjectCandidates.quantidade++;  
//         let AskID = ArrayCandidates.find(candidate => candidate.id === IDQuestion);

//         let ConfirmInscrition = confirm(
//             "Nome do candidato: " + ObjectCandidates.nomeCandidato +
//             "\nID da vaga: " + IDQuestion +
//             "\n\nDeseja salvar as informações?"
//         );

//         if (AskID && ConfirmInscrition) {
//             ArrayCandidates.push({...ObjectCandidates});
//             alert("Informações salvas com sucesso!");
//         } else if (!AskID) {
//             alert("ID inválido!");
//         } else {
//             alert("Certo, retornando ao menu..");
// }

//         break;

//         case 5:
//             let IDVacancy = parseInt(prompt("Informe o ID da vaga:"))
//             let ConfirmationID = ArrayCandidates.find(candidate => candidate.id === IDVacancy)
//             let ConfirmExclusion = false

//                 if (ConfirmationID) {
//                     ConfirmExclusion = confirm("Informações da vaga:\n\n" + 
//                     "Nome do cargo: " + ConfirmationID.nomeVaga +
//                     "\nDescrição da vaga: " + ConfirmationID.descricao +
//                     "\nData limite: " + ConfirmationID.dataLimite +
//                     "\n\nDeseja excluir esta vaga?")
//                      }
//                       if (ConfirmExclusion) {
//                         let index = ArrayCandidates.findIndex(candidate => candidate.id === IDVacancy)
//                       if (index !== -1) {
//                         ArrayCandidates.splice(index, 1)
//                         alert("Vaga excluída com sucesso!")
//                     } else {
//                         alert("Certo retornano ao menu..")
//                     } 
//                 } else {
//                     alert("Vaga não encontrada, retornando ao menu..")
//                 }
//         break;

//         case 6:
//             alert("Encerrando o programa!")
//         break;

//         default:
//             alert("Você não escolheu nenhuma opção disponível\nRetornando ao início..!")
//     }
// } while (option !== 6);