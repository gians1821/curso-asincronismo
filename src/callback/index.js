a = 1
b = 2

function suma(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2, 3, suma))

setTimeout(saludo, 2000, 'Gian')

function saludo(name) {
    console.log(`Hola ${name}, ¡bienvenido a JavaScript!`)
}
