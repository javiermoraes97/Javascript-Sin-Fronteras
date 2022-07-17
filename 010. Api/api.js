const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('Chanchito Feliz')
})

app.post('/', (req, res)=> {
    res.status(201).send('creando chanchito')
}) 

app.put('/:id', (req, res) =>{
    res.sendStatus(204)
})

app.patch('/:id', (req, res) =>{
    res.sendStatus(204)
})

app.delete('/:id', (req, res) =>{
    res.sendStatus(204)
})

app.listen(port, () => {
    console.log('Arrancando la aplicacion')
})

// End points es una ruta a la cual se puede llegar atraves de una peticion y se puede hacer desde un explorador o una aplicacion
// 200 Ok y tambien envia datos como objetos, Arrays, strings y otros tipos de datos
// 201 Ok y que fue creado
// 204 Ok y que no tiene contenido (put, patch, delete)