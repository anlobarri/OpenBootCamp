// Trabajando con Objetos

const obj = {
    id:4, 
    nombre: 'Angel',
    apellido: 'López',
    isDeveloper: true,
    libros_favoritos: ['EL método', 'El código de la manifestación'],
    '4-juegos': [1, 2, 3, 4]
}

console.log(obj.id)
console.log(obj['4-juegos'])

// Acceder a propiedades a través de variables
const prop = 'isDeveloper'
console.log(obj[prop])

//
// const obj2 = obj
// console.log(obj2)

// obj2.nombre = 'Erik'
// console.log(obj2.nombre)
// console.log(obj.nombre)

// let val1 = 4
// let val2 = val1

// val2 = 6
// console.log(val1)
// console.log(val2)

const obj2 = {...obj}

//////
// Como ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
    {titulo: 'Lo que el viento se llevo', anyo: 1939},
    {titulo: 'Titanic', anyo: 1997},
    {titulo: 'Moana', anyo: 2016},
    {titulo: 'El efecto mariposa', anyo: 2004},
    {titulo: 'TED', anyo: 2012}
]

console.log(listaPeliculas)
//.sort() -> Muta el valor de la lista original
listaPeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaPeliculas)
