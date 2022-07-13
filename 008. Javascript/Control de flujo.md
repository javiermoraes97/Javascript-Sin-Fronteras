# Control de flujo

Itereaciones nos permite realizar iteraciones y tambien nos permite evaluar condiciones

Si tiene el valor de true puede ejecutar logica, y si es false se la puede saltar.

## Control de flujo: If
    if (true) {
        console.log('Estoy dentro de un if');
        }

    const edad = 10
    if (edad > 5 && edad < 18) {
        console.log('El niño puede jugar');
        }   

    const edad1 = 4
    if (edad1 > 5 && edad1 < 18) {
        console.log('El niño puede jugar');
        }
    console.log('Fin del Programa');

## Control de flujo: While
    let x = 0
    while (x < 5) {
        console.log(x);
        x++
        }
    console.log('Terminando el loop')

## Control de flujo: Switch

Podemos ejecutar una instruccion u otra instruccion.

    let y = 3;

    switch (y) {
        case 1: {
            console.log('Yo soy el caso 1');
            break;
        }
        case 2: {
            console.log('Chanchito feliz');
            break;
        }
        case 3: 
            console.log('Chanchito triste: (');
            break;
        default: 
        console.log('No hay chanchitos! : (');
        break;
        }

## Control de flujo: For

Nos permite iterar o encontrarnos en un loop hazta que se cumpla una condicion

    for (let i = 0; i < 10; i++) {
    console.log(i);
        }

### Acceder a los elementos de un arreglo

    const numeros = [1, 2, 'Hola', 4, 5]

    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
        }