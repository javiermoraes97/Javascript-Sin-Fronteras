/// Variables

let miPrimeraVariable = 'Mi primera variable'
//console.log(miPrimeraVariable);

/// Mutabilidad

miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable);

/// Boolean
let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

//console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

let undef 
//console.log(undef);

let nulo = null

//console.log('nulo');


/// Objeto Vacio
const miPrimerObjeto = {}

/// Objeto agrupaciones de datos que hacen sentido entre si
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
}

//console.log(miObjeto.unString);

const arrVacio = []
const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

//console.log(arrVacio, arr);

arr.push(5)
arrVacio.push(1)
arrVacio.push(2)
arrVacio.push(3)
arrVacio.push('Hola')

//console.log(arr, arrVacio);

/// Usualmente solo utilizaremos los tipos de datos aca explicados
/// Strings, Numbers, Null, Undefined, Object, Arrays, Boolean

/// Operadores Matematicos

const suma = 1 + 2
const restar = 1 -2
const multiplicar = 2 * 3
const division = 9 / 3

//console.log(suma, restar, multiplicar, division);

const modulo = 10 % 3
//console.log(modulo);

let num = 5
//num++ "Este operador incrementa el numero"
//num-- "Este operador desciende el numero"

//// Operadores de Asignacion

//num += 2
//num -= 2
//num *= 2
//num /= 2

//console.log(num);

/// Operadores de comparacion

/// Igualdad Estricta
const resultado1 = 5 === 6 //"Pregunta si los datos son exactamente iguales"
/// Igualdad no estricta, strings pueden ser igales a numeros si el valor es el mismo.
const resultado2 = 5 == '5'  //"Pregunta si los datos son iguales y no es tan extricto"

const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 4
const resultado7 = 5 <= 5
const resultado8 = 5 <= 6
const resultado9 = 5 >= 5
const resultado10 = 5 >= 6

/// Desigualdad Estricta
const resultado11 = 5 !== 6
const resultado12 = 5 != '5'

//console.log(resultado11, resultado12);

/// Operadores Logicos

// or ||, and &&, not !

const resultadoOr = false || true // Con "or ||" se toma el primer resultado que sea true
// console.log(resultadoOr);

const resultadoAnd = true && false // Con "and &&" se toma el primer resultado que sea false
// console.log(resultadoAnd);

const resultadoNot = !true // Invierte el valor del boolean
// console.log(resultadoNot);
