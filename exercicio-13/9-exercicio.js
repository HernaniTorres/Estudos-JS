const numbers = [1,2,3,4,5,6,7,8,9,10];
const divisor = 3;


// 1- Filtre os números que são multiplos de 3 //

    let multiplo3 = numbers.filter(num => num % divisor === 0)
    let multiplication2 = multiplo3.map(num => num * 2)
    let PlusNumbers = multiplo3 + multiplication2

    function SomaGeral () {
        return multiplication2.reduce((prev, curr) => prev + curr);
    }

console.log(multiplo3)
console.log(multiplication2)
console.log(SomaGeral())