// Operador .valueOf() -> Obtener valores numericos a partir de literales
let a = 2
let b = new Number(3) // Casting

console.log(b)
console.log(a + b)

console.log(b.valueOf())

//NaN (Not a Number) - Infinity
let n = Number('adios')
console.log(n)
console.log(isNaN(n))

let numerador = 19
let divisor = 0
let divisor_2 = null

console.log(numerador / divisor)
console.log(numerador / divisor_2)


// Como convertir los strings a valores numericos, parseInt y parseFloat
let numero = '6.89'
let numero2 = 4.98
console.log(Number(numero) + numero2)

console.log(parseInt(numero))
console.log(parseFloat(numero))

let num3 = 4
console.log(parseInt(num3))
console.log(parseFloat(num3))

// Numeros hexadecimales (base 16)
let numHex = '0x3a5b7'
console.log(parseInt(numHex, 16))


// Obtener los valores máximo y mínimo
let min_precision = Number.EPSILON // Valor mínimo con el que podemos trabajar
let min_valor_JS = Number.MIN_VALUE 
let max_valor_JS = Number.MAX_VALUE