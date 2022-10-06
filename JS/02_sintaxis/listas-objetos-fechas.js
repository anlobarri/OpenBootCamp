// Listas
const lista = [1, 2, 3, 4, false, "Angel", true];
const lista2 = new Array(1, 2, 3, 4, false, "Angel", true);
const lista3 = [lista, lista2];

console.log(lista);
console.log(lista2);
console.log(lista3);

// Objetos

const movil = {
    altura: 10,
    anchura: 5,
    marca: "Huawei",
    isWhite: false,
    contactos:["Angel", "Erik"],
    tarjeta:{
        marca:"Sandisk",
        almacenamiento:32,
    },
    "altura-tarjeta": 4,
}

console.log(movil.marca);
movil.anyo = 2019;
movil.marca = "Samsung"
console.log(movil.marca)

// Fechas
const ahora = new Date()
console.log(ahora)

const fechaNacimiento = new Date("20 march 1986");
console.log(fechaNacimiento)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

console.log(dia, mes, anyo)

const libroFavorito = {
    titulo: "Ready Player One",
    autor: "Ernest Cline",
    fecha: new Date("16 august 2011"),
    url: "https://es.wikipedia.org/wiki/Ready_Player_One",
};

const arrayEjercicio = ["Angel", 36, true, fechaNacimiento, libroFavorito ]

console.log(arrayEjercicio)