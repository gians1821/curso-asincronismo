function suma(num1, num2) {
    console.log(num1 + num2) 
}

function resta(num1, num2) {
    console.log(num1 - num2) 
}

function calcular(num1, num2, callback) {
    callback(num1, num2)
}

setTimeout(calcular, 3000, 1, 2, resta)
setTimeout(calcular, 2000, 1, 2, suma)

calcular(5, 1, resta)
calcular(2, 4, suma)
