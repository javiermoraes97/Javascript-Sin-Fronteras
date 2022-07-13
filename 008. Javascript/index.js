/* Variables

let miPrimeraVariable = 'Mi primera variable'
console.log(miPrimeraVariable);

 Mutabilidad

miPrimeraVariable = 'Esto ha cambiado'
console.log(miPrimeraVariable);

 Boolean
let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

let undef 
console.log(undef);

let nulo = null

console.log('nulo'); */


/* Objeto Vacio
const miPrimerObjeto = {}

Objeto agrupaciones de datos que hacen sentido entre si
const miObjeto = {
unNumero: 12,
unString: 'Esta cadena de caracteres',
unaCondicion: true,
}

console.log(miObjeto.unString);

const arrVacio = []
const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

console.log(arrVacio, arr);

arr.push(5)
arrVacio.push(1)
arrVacio.push(2)
arrVacio.push(3)
arrVacio.push('Hola')

console.log(arr, arrVacio);

Usualmente solo utilizaremos los tipos de datos aca explicados
Strings, Numbers, Null, Undefined, Object, Arrays, Boolean */

/* Operadores Matematicos

const suma = 1 + 2
const restar = 1 -2
const multiplicar = 2 * 3
const division = 9 / 3

console.log(suma, restar, multiplicar, division);

const modulo = 10 % 3
console.log(modulo);

let num = 5
num++ "Este operador incrementa el numero"
num-- "Este operador desciende el numero"

Operadores de Asignacion

num += 2
num -= 2
num *= 2
num /= 2

console.log(num);

Operadores de comparacion

Igualdad Estricta
const resultado1 = 5 === 6 "Pregunta si los datos son exactamente iguales"
Igualdad no estricta, strings pueden ser igales a numeros si el valor es el mismo.
const resultado2 = 5 == '5'  "Pregunta si los datos son iguales y no es tan extricto"

const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 4
const resultado7 = 5 <= 5
const resultado8 = 5 <= 6
const resultado9 = 5 >= 5
const resultado10 = 5 >= 6

Desigualdad Estricta
const resultado11 = 5 !== 6
const resultado12 = 5 != '5'

console.log(resultado11, resultado12);

Operadores Logicos

or ||, and &&, not !

const resultadoOr = false || true  Con "or ||" se toma el primer resultado que sea true
console.log(resultadoOr);

const resultadoAnd = true && false  Con "and &&" se toma el primer resultado que sea false
console.log(resultadoAnd);

const resultadoNot = !true  Invierte el valor del boolean
console.log(resultadoNot); */

/* Control de flujo

Itereaciones nos permite realizar iteraciones y tambien nos permite evaluar condiciones
Si tiene el valor de true puede ejecutar logica, y si es false se la puede saltar.
 Control de flujo: If
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
 Control de flujo: While
let x = 0
while (x < 5) {
    console.log(x);
    x++
}
console.log('Terminando el loop')
 Control de flujo: Switch
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

Control de flujo: For
Nos permite iterar o encontrarnos en un loop hazta que se cumpla una condicion

for (let i = 0; i < 10; i++) {
  console.log(i);
}

Acceder a los elementos de un arreglo

const numeros = [1, 2, 'Hola', 4, 5]

for (let i = 0; i < numeros.length; i++) {
     console.log(numeros[i]);
} */

/* Introduccion a Funciones

function iterar(arg1) {
    for (let i = 0; i < arg1.length; i++) {
        console.log(arg1[i]);
    }
}

const numeros = [1, 2, 'Hola', 4, 5]
const nombres = ['Pedro', 'Juan', 'Felipe', 'Chanchito Feliz', 'Chanchito Triste']

iterar(numeros)
iterar(nombres) */

/* Mas funciones

function suma(a, b) {
    return(a + b);
}

const resultadoSuma1 = suma (1, 2)
const resultadoSuma2 = suma (5, 6)
const resultadoSuma3 = suma (resultadoSuma1, resultadoSuma2)

console.log('resultado', resultadoSuma3); */

/* // Call Backs
// Se ejecuta al final de una funcion

function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}

function callback(result){
    console.log('resultado', result);
}

callback(6)

sumar(2, 3, callback)

Funciones como valores
en js las funciones ademas de cumplir con funciones de codigo tambien son valores */

/* Fat arrow functions
Tiene Dos caracteristicas importante (No tiene la necesidad de escribir functions) y la segunda es que (No tiene la necsidad de declararle la palabra reservada de return porque esta implicito)

const miFatArrowFunction = (a, b) => a + b 
const otraFAF = (a, b) => {
    return a + b
}
const r = otraFAF(1, 2)
console.log(r); */

// Funciones Anonimas
// No tiene ningun nombre por lo general se usa en un contexto cuando una funcion es ejecutada por otra funcion por ejemplo en los callbacks

function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}

sumar(2, 3, function (r) {
    console.log('Soy una funcion anonima y mi resultado es', r)
})