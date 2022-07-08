# Grid
- La caracteristica basica de flexbox es que esta pensada para trabajar una unica fila y una unica columna 

- Mientras que grid se encarga de manejar multiples filas y columnas.

- Display : Grid Sirve para la distribucion en grilla que es igual a actuar como celdas.

- Columnas = grid-template-columns
- Filas = grid-template-rows

## Tamano Minimo y maximo

- grid-template-rows: minmax(100px, auto)
- grid-template-columns: minmax(auto, 50%)

## Repetir Dimensiones

- grid-template-rows: repeat(2, 50px)
- grid-template-columns: 30px repeat(3, 1fr) 15px

## Brechas entre elementos

- grid-gap: 15px
- grid-row-gap: 20px
- grid-column-gap: 10px


## Expandir elementos en la grilla

Primero hay que asignarle una propiedad a la grilla que uno quiera darle propiedades.

- grid-column: 1 / 6;
- grid-column-start: 1;
- grid-column-end: 6;

- grid-row: 1 / 3,
- grid-row-start: 1;
- grid-row-end: 3;

## Asignar nombre a las lineas de la grilla

- grid-template-rows: [row-1-inicio] 50px [row-2-inicio] 50px [row-3-fin];
- grid-template-columns: [col-1-inicio] 1fr [col-2-inicio] 1fr [col-3-inicio] 1fr [col-4-fin];
- grid-gap: 15px;

- .header {
    grid-column: col-1-inicio / col-4-fin;
    grid-row: row-1-inicio / row-3-fin;
}

## Usando repeat para nombre de lineas predecibles

- grid-template-rows: repeat (2, [row-inicio] 50px [row-fin]);
- grid-template-columns: repeat (3, [col-inicio] 1fr [col-fin]);

- .header {
    grid-column: col-inicio / col-fin 3;
    grid-row: row-inicio / row-fin 3;
}

## Areas de grillas

.grid {
    display: grid;
    grid-template-areas: "header header"
                         "content sidebar"
                         "footer footer";
    grid-template-rows: 150px 1fr 100px;
    grid-template-columns: 1fr 200px;
}

- grid-template: grid-template-rows / grid-template-columns;

## Grid Implicitas

- Es todo aquel contenido que se encuentre dentro de la grilla que no haya sido definido

- grid-auto-rows: 140px;
- grid-auto-columns: 100px;
- grid-auto-flows: rows; = este cambia la direccion de las grillas por defecto viene en rows.

## Alinea y justifica el elemento "grilla en su mismo eje dentro del item"

- EJE DE LAS X
- justify-self:

- EJE DE LAS Y
- align-self:

## Alinea y justifica el elemento "alinea el item dentro del contenedor"

- EJE DE LAS X
- justify-items:

- EJE DE LAS Y
- align-items:

## Alineado de la grilla completa "Todo el contenedor en base al exterior"

- EJE DE LAS X
- justify-content:

- EJE DE LAS Y
- align-content:


## HACER TODOS LOS EJERCICIOS DE CSSGRIDGARDEN 

