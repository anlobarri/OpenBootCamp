// Iterar los valores de una lista
let array = [1, 2, 3, 4, 5]

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// Forma ES6
let suma = 0
let arrayNums = [2, 3, 4, 5, 6, 7]

arrayNums.forEach(valor =>{
    suma += valor
})
console.log(suma)

array.forEach(valor =>{
    console.log(valor)
})

array.forEach(function(valor){
    console.log(valor)
})

// Busqueda de un valor dentro de una lista
//.find()
const variable = array.find(valor =>{
    if(valor === 5){
        return true;
    }
})
console.log(variable)

let listaObjetos = [
    {nombre: 'Angel', edad:35},
    {nombre:'Erik', edad:15},
    {nombre:'Rocío', edad:32},
    {nombre:'Link', edad:376}
]

// const objeto = listaObjetos.find(o =>{
//     if(o.nombre === 'Erik'){
//         return true;
//     }
// })

// console.log(objeto.edad)

const objeto = listaObjetos.find(o => o.nombre === 'Erik')
console.log(objeto.edad)   

let {edad} = listaObjetos.find(o => o.nombre === 'Rocío')
console.log(edad)