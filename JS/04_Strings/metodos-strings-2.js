let input = 'Piscis'
let db = 'piscis'

//toLowerCase() - toUpperCase()

console.log(input.toUpperCase())
console.log(input.toLowerCase())

// Concatenacion de strings

let str_1 = 'Hola soy la primera cadena.'
let str_2 = 'Yo soy la segunda cadena'

//concat()
console.log(str_1.concat(" ", str_2))

// +
console.log(str_1 + " " + str_2)

// Comillas invertidas
console.log(`${str_1} ${str_2}`)

// Eliminar espacios al incio y al final -> trim()
let str_3 = '        Hola soy un string con espacios al final    '
console.log(str_3.length)

console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtener la letra en cierta posicion
let str_4 = 'Hola soy el string número 4'
console.log(str_4.charAt())
console.log(str_4[5])

for(letra in str_4){
    console.log(str_4[letra])
}

// Obtener la posicion de una palabra dentro de un string
let str_5 = 'Hola caracola me gusta el salmorejo. Como me mola el salmorejo'
console.log(str_5.indexOf("salmorejo"))
console.log(str_5[26])

console.log(str_5.lastIndexOf("salmorejo"))
console.log(str_5[53])