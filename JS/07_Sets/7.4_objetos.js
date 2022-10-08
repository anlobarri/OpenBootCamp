const datosPersonales = {
    nombre: 'Angel',
    apellido: 'López',
    edad: 36,
    altura: 1.70,
    isDeveloper: true
}

const miEdad = datosPersonales.edad

const listaDatosPersonales = [
    {...datosPersonales},
    {
        nombre:'Pepito',
        apellido:'De los Palotes',
        edad: 99,
        altura: 1.90,
        isDeveloper: false
    },
    {
        nombre: 'Araceli',
        apellido: 'Lucena',
        edad: 21,
        isDeveloper: true
    }
]

const ordenEdad = listaDatosPersonales.sort((a, b) => b.edad - a.edad)

console.log(ordenEdad)