// .some()
const array = [1, 2, 3, 4, 5, 6, 7, 8]
const res = array.some(valor => valor > 0)
console.log(res)

const existe = array.some(valor => valor === 2)
console.log(existe)

let listaObjetos = [
    {nombre: 'Angel', edad:35},
    {nombre:'Erik', edad:15},
    {nombre:'Rocío', edad:32},
    {nombre:'Link', edad:376}
]

const existePersona = listaObjetos.some(persona => persona.nombre === 'Erik')

console.log(existePersona)

// Como obtener una lista a partir de un objeto iterable

const str = 'Hola Mundo'
console.log(str[1])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, 'hola', 4])
const ar_set = Array.from(set)
console.log(ar_set)


const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)
