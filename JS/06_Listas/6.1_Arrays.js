// Como trabajar con listas
let array = [1, 2, 3, 4, 5, 6, 'hola', false]

// Acceder a los valores de un array a través de su posicion
console.log(array[3])

// Métodos para introducir nuevos valores
// .push() .unshift() -> Mutan el valor de nuestro array
// Valores al final -> PUSH
array.push('final', 13, 3.14)
console.log(array)

// Valores al principio
array.unshift('Angel')
console.log(array)

// Métodos para eliminar valores
// .pop() .shift() -> Mutan el valor del array
let array2 = [1, 3, 'hola', false]
// Valores al final -> Pop
array2.pop()
console.log(array2)
// Valores al principio -> Shift
array2.shift()
console.log(array2)

// Metodo para eliminar, modificar o añadir valores en array
// .splice()
let array3 = [1, 2, 3, 4, 5]
// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1) // Posición y valores que queremos eliminar
console.log(array3)
// Añadir valores .splice(indice, 0, valores)
array3.splice(2,0,'nuevoValor')
console.log(array3)
// Modificar valores .splice(indice, 1, valores)
array3.splice(2,1, 'valorModificado')
console.log(array3)


