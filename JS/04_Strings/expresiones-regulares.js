// Expresiones regulares y busquedas de cadenas
// https://regexr.com/

let texto_largo = 'La literalidad encadena el espíritu divagador y lo doma, al mismo tiempo que detiene la infernal facilidad de la pluma. Yo me felicito de que así sea; porque ¿dónde encontrar un traductor de genio simple, anónimo, libre de la necia manía de su renombre?'

console.log(texto_largo.match(/la/g))

// Comprueba si existe la palabra dentro del texto
console.log(texto_largo.includes('salmorejo'))

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith('la'))
console.log(texto_largo.endsWith('?'))