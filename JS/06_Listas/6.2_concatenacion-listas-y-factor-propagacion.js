// Como unir dos listas
// .concat(lista2)

let lista1 = ['hola', 'mundo', true, null]
let lista2 = ['adios', 'mundo', false, undefined]

console.log(lista1.concat(lista2))

let lista3 = lista1.concat(lista2)
console.log(lista3)

// Unir dos listas con el factor de propagación
console.log(...lista3)

let lista4 = [...lista1, ...lista2]
console.log(lista4)

// ERROR!! Mal entendido el concepto del factor de propagacion
let lista5 = [lista1, lista2]
console.log(lista5)