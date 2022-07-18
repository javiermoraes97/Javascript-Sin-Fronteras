const User = {
    get: (req, res) =>{
        res.status(200).send('Este es un Chanchito')
    },
    list: (req,res) => {
        res.status(200).send('Hola Chanchito!')
    },
    create: (req, res) => {
        res.status(201).send('Creando un Chanchito')
    },
    update: (req, res) => {
        res.status(204).send('Actualizando Chanchito')
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminado un Chanchito :(')
    }
}

// Ahora hay que exportar a el objeto del user

module.exports = User