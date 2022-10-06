// BUCLES

// for(inicializacion; condicion; actualizacion){

// }

for(let i = 0; i < 20; i+= 2){
    console.log(i)
}

let lista = [1, 4, 5, 6, 7, 8, 9]

// Estructura for
for(let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

// Estructura for..of
for(let valor of lista){
    console.log(valor)
}

// Estructura forEach
// Funciones flechas
lista.forEach(valor => {
    console.log(valor)
})


// Estructura for..in
let persona = {
    nombre: "Angel",
    apellido: "López",
    edad: 34,
    isDeveloper: true
};

// let prop = "edad";
// console.log(persona[prop])

for (let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}