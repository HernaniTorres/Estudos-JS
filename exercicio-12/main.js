let option

do  {
    option = parseFloat(prompt("Olá usuário (a), bem vindo a Calculadora Geométrica!\nO que você precisa saber?\n\n"
        + "1- Área do triângulo (cm²)\n2- Área do retângulo (cm²)\n3- Área do quadrado (cm²)\n4- Área do trapézio (cm²)\n5- Área do círculo (cm²)\n6- Sair do programa")
    )
switch (option) {
    case 1:
    let triangleBase = parseFloat(prompt("Área do Triângulo!" + "\n\nInforme o valor da base:"))
    let triangleHeight = parseFloat(prompt("Área do Triângulo!" + "\n\nInforme o valor da altura:"))
    function CalculationTriangle () {
        let Calculation = (triangleBase * triangleHeight) / 2
        return Calculation
    }
    alert ("Área do triângulo: " + CalculationTriangle() + "cm²")
    break;
    case 2:
    let RectangleBase = parseFloat(prompt("Área do Retângulo!" + "\n\nInforme o valor da base:"))
    let RectangleHeight = parseFloat(prompt("Área do Retângulo!" + "\n\nInforme o valor da altura:"))
    function CalculationRectangle () {
        let Calculation = (RectangleBase * RectangleHeight)
        return Calculation
    }
    alert ("Área do triângulo: " + CalculationRectangle() + "cm²")
        break;
    case 3:
        let SquareBase = parseFloat(prompt("Área do Quadrado!" + "\n\nInforme o valor do lado:"))
        function CalculationSquare () {
            let Calculation = (SquareBase ** 2)
            return Calculation
        }
        alert ("Área do triângulo: " + CalculationSquare() + "cm²")
        break;
    case 4:
        let TrapezeBaseBigger = parseFloat(prompt("Área do Trapézio!" + "\n\nInforme o valor da base maior:"))
        let TrapezeBaseSmaller = parseFloat(prompt("Área do Trapézio!" + "\n\nInforme o valor da base menor:"))
        let TrapezeHeight = parseFloat(prompt("Área do Trapézio!" + "\n\nInforme o valor da altura:"))
        function CalculationTrapeze () {
            let Calculation = (TrapezeBaseBigger * TrapezeBaseSmaller) * TrapezeHeight / 2
            return Calculation
        }
        alert ("Área do triângulo: " + CalculationTrapeze() + "cm²")
        break;
    case 5:
        let RayCircle = parseFloat(prompt("Área do Círculo!" + "\n\nInforme o valor do raio:"))
        function CalculationCircle () {
            let Calculation = (3.14 * RayCircle ** 2)
            return Calculation
        }
        alert ("Área do triângulo: " + CalculationCircle() + "cm²")
        break;
    case 6:
        alert("Encerrando o programa..!")
        break;
    default:
        alert("Você não escolheu nenhuma opção disponível.\nRetornando ao inicio..")
        break;
}

} while (option !== 6)