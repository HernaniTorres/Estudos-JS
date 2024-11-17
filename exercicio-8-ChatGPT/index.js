// EXERCICIO LISTA - CHATGPT //

let IntireNumbers = [5, 10, 15, 20, 25];
let PlusNumbers = 0;
let FirstNumber = 0;
let LastNumber = 0;

for (let i = 0; i < IntireNumbers.length; i++) {
    PlusNumbers += IntireNumbers[i];
    FirstNumber = IntireNumbers[0];
    LastNumber = IntireNumbers[IntireNumbers.length - 1];
}

alert ("Este é o primeiro número da lista: " + FirstNumber +
    "\nEste é o último número da lista: " + LastNumber +
    "\nSoma: " + PlusNumbers
)

if (IntireNumbers.includes(10)) {
    alert ("O número 10 está presente!")
} else {
    alert ("O número 10 não está presente!")
}    

// EXERCICIO MANIPULAÇÃO ARRAY - CHATGPT //

let Numbers = [20, 30, 40, 50, 60]
let NewNumber = Numbers.push(100)
let AverageNumbers = 0
let MinorNumber = Math.min(...Numbers)
let MaxNumber = Math.max(...Numbers)

for (let i = 0; i < Numbers.length; i++) {
    AverageNumbers += Numbers[i] / 5
}

alert ("Segundo número do Array: " + Numbers[1] + "\nA Media do Array: " + AverageNumbers +
       "\nMenor número do Array: " + MinorNumber + "\nMaior número do Array: " + MaxNumber + 
       "\nEste é o Array atualizado: " + Numbers)






