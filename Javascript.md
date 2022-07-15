# Javascript

## Flujo de trabajo

- Lo primero es crear una carpeta con el nombre de js y en el crear un archivo de index.js 
- Cada vez que quieras iniciar el proceso que nosotros hayamos realizado usar el codigo de /<touch index.js>
- Cada vez que quieras ejecutar algun cambio que nosotros hayamos realizado /<node index.js>

- /<push>
- /<arr.splice>
- /<arr.push>
- /<document.querySelectorAll('#id')>
- /<localstorage>
- /<Spread operator> Sirve para crear una copia de un objeto sin modificar a el original

## Promesas(promise)
### Resolve y Then

- /<Promise.resolve()> 
- /<.then(valor => valor + 1)> 
- /<.then(valor => console.log(valor))> 

### catch y reject

- /<Promise.reject()> 
- /<.then(valor => valor + 1)> 
- /<.then(valor => console.log(valor))> 
- /<.catch(e => console.error(e))> 

### Interrumpiendo la cadena

- /<Promise.reject(2)> 
- /<.then(valor => Promise.reject(1))> 
- /<.then(valor => valor + 2)> 
- /<.catch(e => console.error(e))> 

### New Promise

- /<new Promise((resolve, reject) =>{
    setTimeout(() => resolve(2), 1000)
})
.then(x => console.log(x))
.catch(e => console.error(e))
> 
- /<.then(valor => Promise.reject(1))> 
- /<.then(valor => valor + 2)> 
- /<.catch(e => console.error(e))> 