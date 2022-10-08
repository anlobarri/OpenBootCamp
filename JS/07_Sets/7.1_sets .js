// Sets o conjuntos
const array = [1, 2, 34, 5, 6]
const miSet = new Set(array)

console.log(miSet)

// .add()
miSet.add(9)
console.log(miSet)

// .delete()
miSet.delete(2)
console.log(miSet)

// .clear() -> Elimna todos los valores del set
// miSet.clear()
// console.log(miSet)

// .has() -> Saber si continene
console.log(miSet.has(34))

// .size
console.log(miSet.size)

miSet.forEach(valor =>{
    console.log(valor)
})

const it_miSet = miSet.values()

const ar_miSet = [...miSet]
console.log(ar_miSet)