// Fechas

const fecha = new Date()
console.log(fecha)

// los meses inicializan en 0
const fecha2 = new Date(1986, 2, 20)
console.log(fecha2)

const fecha2_1 = new Date (1986, 2, 20)

const fecha3 = new Date(-1000000000000)
console.log(fecha3)

const fecha4 = new Date('March 20, 1986')
console.log(fecha4)

console.log(fecha > fecha2)
console.log(fecha === fecha2) // ERROR -> No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha2_1.getTime())


// Obtener el dia, el mes y el año de una fecha
// Obtener el dia .getDate()
console.log(fecha2.getDate())

// Obtener el mes
console.log(fecha2.getMonth() + 1)

// Obtener el año
console.log(fecha2.getFullYear())

// Mostrar fecha en String
// .toLocaleDateString
// 
console.log(fecha2.toLocaleDateString('en-GB'))


const diaNacimiento = (fechaNacimiento) =>{
    let fecha = new Date(fechaNacimiento)
    if(fecha.getDay() === 0){
        return 'Naciste un Domingo'
    }else if(fecha.getDay() === 1){
        return 'Naciste un Lunes'
    }else if(fecha.getDay() === 2){
        return 'Naciste un Martes'
    }else if(fecha.getDay() === 3){
        return 'Naciste un Miércoles'
    }else if(fecha.getDay() === 4){
        return 'Naciste un Jueves'
    }else if(fecha.getDay() === 5){
        return 'Naciste un Viernes'
    }else{
        return 'Naciste un Sábado'
    }

}

console.log(diaNacimiento('December 08, 2006'))
