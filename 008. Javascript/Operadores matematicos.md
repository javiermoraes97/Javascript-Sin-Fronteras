# Operadores Matematicos

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

## Operadores de Asignacion

    num += 2
    num -= 2
    num *= 2
    num /= 2

    console.log(num);

## Operadores de comparacion 

### Igualdad Estricta

    const resultado1 = 5 === 6 /"Pregunta si los datos son exactamente iguales"

Igualdad no estricta, strings pueden ser igales a numeros si el valor es el mismo.

    const resultado2 = 5 == '5'  /"Pregunta si los datos son iguales y no es tan extricto"

    const resultado3 = 5 < 6
    const resultado4 = 5 < 5
    const resultado5 = 5 > 6
    const resultado6 = 5 > 4
    const resultado7 = 5 <= 5
    const resultado8 = 5 <= 6
    const resultado9 = 5 >= 5
    const resultado10 = 5 >= 6

### Desigualdad Estricta

    const resultado11 = 5 !== 6
    const resultado12 = 5 != '5'

    console.log(resultado11, resultado12);

## Operadores Logicos "or ||, and &&, not !"

    const resultadoOr = false || true // Con "or ||" se toma el primer resultado que sea true
    console.log(resultadoOr);

    const resultadoAnd = true && false // Con "and &&" se toma el primer resultado que sea false
    console.log(resultadoAnd);

    const resultadoNot = !true // Invierte el valor del boolean
    console.log(resultadoNot);