// Métodos más avanzados
// .map() .filter() .reduce()

const array = ['Córdoba', 'Sevilla', 'Granada', 'Huelva', 'Málaga', 'Jaén']

const val = array.forEach(v =>{
    console.log(v)
})

console.log(val)

// const newArray = array.map((valor, indice) =>{
//     console.log(indice)
//     return `${indice + 1} - ${valor}`
// })
// console.log(newArray)


// Obtenemos un array modificando cada uno e los valores
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

// FILTER
const listaObjetos = [
    {nombre: 'Angel', edad:35},
    {nombre:'Erik', edad:15},
    {nombre:'Rocío', edad:32},
    {nombre:'Link', edad:376}
]

// const personasMayores = listaObjetos.filter(obj =>{
//     if(obj.edad > 20){
//         return true
//     }else{
//         return false
//     }
// })

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)

console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== 'Angel')
console.log(nuevaLista)

// REDUCE -> Obtener un valor a partir de una lista

const valores = [34, 56, 99, 203, 200]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) =>{
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)