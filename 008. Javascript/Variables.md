# Variables

Puede definirse de 3 formas


- Var: Hacemos un referencia a la forma antigua de js, y la cual va al tope del archivo y es muy global.

    var miPrimeraVariable = 'lala'

    let: Es es metodo mas usado y que usaremos muchas veces

    let miPrimeraVariable = 'Mi primera variable'
    console.log(miPrimeraVariable);

"Para reemplazar la asignacion de la variable let solo hay que escribir la variable y asignarle un nuevo valor o tipo de dato" = y esto se le conoce como /<mutabilidad> 

    miPrimeraVariable = 'Esto ha cambiado'
    console.log(miPrimeraVariable);

## Diferencia entre let y const
Basicamente un const siempre es constante y no te permite la mutabilidad su valor

Mientras que let si te permite la mutabilidad de sus valores