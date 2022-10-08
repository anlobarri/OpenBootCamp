const listaCompra = ['huevos', 'patatas', 'pasta', 'pan de molde', 'mantequilla']

listaCompra.push('Aceite de Girasol')
listaCompra.pop()

const peliculasFavoritas = [
    {titulo: 'Big Fish', director:'Tim Burton', fecha: 2003},
    {titulo: 'Ready Player One', director:'Steven Spielberg', fecha: 2018},
    {titulo: 'Star Wars', director:'George Lucas', fecha: 1977}
]

const peliculasAnteriores2010 = peliculasFavoritas.filter(peli => peli.fecha >= 2010)

const directoresPeliculas = peliculasFavoritas.map((pelicula) => pelicula.director)

const tituloPeliculas = peliculasFavoritas.map((pelicula) => pelicula.titulo)

const direcTituloConcat = directoresPeliculas.concat(tituloPeliculas)

const direcTituloPropagacion = [...directoresPeliculas, ...tituloPeliculas]
