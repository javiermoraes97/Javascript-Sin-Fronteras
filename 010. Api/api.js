const express = require ('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000


app.use(express.json())
mongoose.connect('mongodb+srv://javimo:javiMO97@moworl.ua2zk.mongodb.net/miapp?retryWrites=true&w=majority')

app.get('/users', user.list)
app.post('/users', user.create) 
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

app.use(express.static('app'))

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.post('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log('Arrancando la aplicacion')
})

// End points es una ruta a la cual se puede llegar atraves de una peticion y se puede hacer desde un explorador o una aplicacion
// 200 Ok y tambien envia datos como objetos, Arrays, strings y otros tipos de datos
// 201 Ok y que fue creado
// 204 Ok y que no tiene contenido (put, patch, delete)

// Refactorizar los end points la forma mas facil es crear modulos con un nuevo archivo

// Capturar todas las peticiones

// Middleware