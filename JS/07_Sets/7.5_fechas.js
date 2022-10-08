const fechaActual = new Date()

const fechaNacimiento = new Date('March 20, 1986')

const comprobacion_fechas = fechaActual > fechaNacimiento

const diaNacimiento = fechaNacimiento.getDate()

const mesNacimiento = fechaNacimiento.getMonth() + 1

const anyoNacimiento = fechaNacimiento.getFullYear()

