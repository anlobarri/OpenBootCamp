// Numeros
// Precision

// let b = 0.1
// let c = 0.2
// console.log(b+c)

// Math.round() -> Redondea hacia abajo sin decimales
console.log(Math.round((0.1 + 0.2)*100)/100)

// Operaciones y redondeo
// Principales operaciones aritmeticas
let a = 3.5
let b = 4.8

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

// Representacion en cadenas de texto
console.log(typeof a)
let a_str = a.toString()
console.log(a_str)
console.log(typeof a_str)

// Redondeo de numeros decimales
let c = 3.3
let d = c * 3

console.log(d)
//toFixed(x) -> Limita el numero de decimales al valor x
console.log(typeof d.toFixed())

// toPrecision(x) -> Limita el numero de cifras significativas
let e = 3123.4324234234
console.log(e.toPrecision(4))
console.log(typeof e.toPrecision(4))