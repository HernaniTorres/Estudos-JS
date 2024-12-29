// FUNÇÃO NOMINADA //
function exemplo (num1, num2) {
    return num1 + num2
}

console.log(exemplo(5,5));

// FUNÇÃO ANÔNIMA //
const exemple = function (num1, num2) {
    return num1 + num2
}

console.log(exemple(10,10));

// ARROW FUNCTION //
const arrowFunction = (num1, num2) => {
    return num1 + num2
}

console.log(arrowFunction(20,20))

// HOF - HIGH ORDER FUNCTION //
const array = ['GOKU', 'VEGETA', 'KURIRIN', 'ANDROID 18']

array.forEach((personagem) => {
    console.log(`DBZ - ${personagem}`);
})