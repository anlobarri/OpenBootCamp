// Métodos Strings

// Obtener la longitud de un string
let str = 'Hola soy un String'
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(0,4)
console.log(slice_str)

let substring_str = str.substring(0, 4)
console.log(substring_str)

let substr_str = str.substr(0, 10)
console.log(substr_str)

// Reemplazar parte del contenido del string -> replace()
let cadena = 'Hola mi nombre es Angel'
console.log(cadena)

console.log(cadena.replace('Angel', 'Erik'))

// Reemplazar todas las instancias /g (global)
// Las expresiones regulares nos permiten hacer una busqueda algo más avanzada

let texto_largo = 'La literalidad encadena el espíritu divagador y lo doma, al mismo tiempo que detiene la infernal facilidad de la pluma. Yo me felicito de que así sea; porque ¿dónde encontrar un traductor de genio simple, anónimo, libre de la necia manía de su renombre?'

console.log(texto_largo.replace(/que/g, 'cinco'))



