// FOR // 
inicialização ; condição ; finalização 

for (let i = 0; i <= 10; i++) {
    alert ("Indice: " + i)
}

let nome = "Hernani Torres"

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

// ROBÔ DA TABUADA //

let QuestionNumber = parseInt(prompt("Me informe o número que deseja multiplicar:"));
let Result = ""

for (let i = 1; i <= 20; i++) {
    Result += QuestionNumber + " * " + i + " = " + (QuestionNumber * i) + "\n"
}

alert("Veja abaixo os resultados!!\n\n" + Result);

// PROCURANDO PALÍNDROMOS //

let QuestionWord = prompt("Me informe qual a palavra deseja consultar:");
let PalindromeWord = ""


for (let i = QuestionWord.length - 1; i >= 0; i--) {
    PalindromeWord += QuestionWord[i]   
}

if (QuestionWord === PalindromeWord) {
    alert (QuestionWord + " é um Palindromo!!")
} else {
    alert(QuestionWord + " não é um Palindromo!!\n\n" + QuestionWord + " !== " + PalindromeWord )
}