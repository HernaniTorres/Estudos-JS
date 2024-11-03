// Carro mais veloz //

let NameOfCar1 = prompt("Olá piloto, me informe o nome do seu carro:");
let VelocityCar1 = prompt("Piloto do carro: " + NameOfCar1 + "\ninsira o valor máximo de velocidade do seu carro:");
let NameOfCar2 = prompt("Olá piloto, me informe o nome do seu carro:");
let VelocityCar2 = prompt("Piloto do carro: " + NameOfCar2 + "\ninsira o valor máximo de velocidade do seu carro:");

if (VelocityCar1 > VelocityCar2) {
    alert (NameOfCar1 + " é mais rápido que o carro " + NameOfCar2)
} else if (VelocityCar1 < VelocityCar2) {
    alert (NameOfCar2 + " é mais rápido que o carro " + NameOfCar1)
} else {
    alert ("Ambos os carros possuem a mesma velocidade!")
};


// Dano do personagem //

let NameCharacterOne = prompt("Informe o nome do seu personagem:");
let PowerCharacterOne = prompt("Informe o seu poder de ataque:");
PowerCharacterOne = parseFloat(PowerCharacterOne)

let NameCharacterTwo = prompt("Informe o nome do seu personagem:");
let LifeOfPointsTwo = prompt("Informe a quantidade de pontos de vida:");
LifeOfPointsTwo = parseFloat(LifeOfPointsTwo)
let DefesePointsTwo = prompt("Informe a quantidade de pontos de defesa:");
DefesePointsTwo = parseFloat(DefesePointsTwo)
let QuestionOfShield = confirm("O seu personagem possui escudo?");
let ResultPower = ""


if (PowerCharacterOne > DefesePointsTwo && QuestionOfShield === false) {
    ResultPower = PowerCharacterOne  - DefesePointsTwo
    alert (NameCharacterTwo + " sofreu " + ResultPower + " pontos de dano!")
} else if (PowerCharacterOne > DefesePointsTwo && QuestionOfShield === true ) {
    ResultPower = (PowerCharacterOne - DefesePointsTwo) / 2
    alert (NameCharacterTwo + " sofreu " + ResultPower + " pontos de dano!")
} else if (PowerCharacterOne <= DefesePointsTwo) {
    alert (NameCharacterTwo + " não sofreu dano!");
};

LifeOfPointsTwo -= ResultPower

alert ("Informações atualizadas dos personagens:" +
    "\n" + NameCharacterOne + "\nPoder de ataque: " + PowerCharacterOne + "\n\n" +
    NameCharacterTwo + "\nPoder de defesa: " + DefesePointsTwo + "\nPontos de vida: " + LifeOfPointsTwo);




