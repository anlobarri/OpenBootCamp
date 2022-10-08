// Obtener una lista a partir de otra .slice()
let lista1 = [1, 2, 3, 'hola']

// SLICE no modifica el valor del array original
console.log(lista1.slice(1,3)) // slice(valorInicial, valorFinal)
let array2 = lista1.slice(2,3)
console.log(array2)

let array3 = lista1.slice(0, -2)
console.log(array3)