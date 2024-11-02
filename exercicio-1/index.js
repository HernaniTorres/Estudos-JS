// Dados do Recruta //

let FirstName = window.prompt("Escreva o seu primeiro nome");
let SecondName = window.prompt("Escreva o seu sobrenome");
let Occupation = window.prompt("Escreva a sua ocupação");
let YearOfBirth = window.prompt("Escreva o ano seu nascimento");
let AgeReal = 2024 - YearOfBirth;

let VerificationData = confirm("Nome: " + FirstName + " " + SecondName + "\nProfissão: " + Occupation + "\nIdade: " + AgeReal + "\n\nOs dados estão corretos?");

console.log(VerificationData);

// Operações Aritméticas //

alert("A seguir, você deve escrever o primeiro e o segundo valor que serão somados, subtraídos, multiplicados e dividos, ok?")
let FirstValue = window.prompt("Informe o primeiro valor: ");
let SecondValue = window.prompt("Informe o segundo valor: ");
FirstValue = parseFloat(FirstValue);
SecondValue = parseFloat(SecondValue);

let AdditionValue = FirstValue + SecondValue;
let SubtractionValue = FirstValue - SecondValue;
let MultiplicationValue = FirstValue * SecondValue;
let DivisionValue = FirstValue / SecondValue;

alert("Soma: " + AdditionValue + "\nSubtração: " + SubtractionValue + "\nMultiplicação: " + MultiplicationValue + "\nDivisão: " + DivisionValue);

