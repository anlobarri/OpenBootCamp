// .sort()
const array = [2, 3, 4, 5, 99, 135, 3.14, 0, 126]

// array.sort((a, b) =>{
//     if(a < b){
//         return -1
//     }else if(a > b){
//         return +1
//     }else{ // a ==== b
//         return 0
//     }
// })

console.log(array)

// Ordenar unicamente arrays numéricos
const arrayNumerico = [2, 3, 4, 5, 99, 135, 3.14, 0, 126]
arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico)

/////////
let listaObjetos = [
    {nombre: 'Angel', edad:35},
    {nombre:'Erik', edad:15},
    {nombre:'Rocío', edad:32},
    {nombre:'Link', edad:376}
]

// listaObjetos.sort((a, b) => {
//     if(a.edad < b.edad){
//         return -1
//     }else if(a.edad > b.edad){
//         return +1
//     }else{
//         return 0
//     }
// })

listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos)

