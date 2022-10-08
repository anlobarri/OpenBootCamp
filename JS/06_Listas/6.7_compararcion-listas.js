// Comparacion de listas
//.every()

const array = [4, 7, 9, 99, 120, 56, 33, -1, -99]
// const resutado = array.every(valor =>{
//     if(typeof valor > 0){
//         return true
//     }else{
//         return false
//     }
// })


const resultado = array.every(valor => valor > 0)

console.log(resultado)

//
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2)

const compararArrays = (array_1, array_2) =>{
    if(array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
    
}
console.log(compararArrays(ar1, ar2))

