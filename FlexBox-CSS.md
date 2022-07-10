# FLEX BOX
- La caracteristica basica de flexbox es que esta pensada para trabajar una unica fila y una unica columna 

- Mientras que grid se encarga de manejar multiples filas y columnas

- Conceptos basicos 
    - Main Start Main End = Ancho de la caja en el eje X
    - Eje Principal el eje de las X
    - Eje Cruzado el eje de las Y
    - Cross Start Cross End = Alto de la caja en el eje Y
    - Flex item esta dentro del contenedor flexbox o flex-container

## Display Flex

- Cambia la distribucion de como esta ordenado el contenido
- /<flex-direction>: row/row-reverse = es el estado predeterminado y coloca a todos uno al lado del otro y con (column/column-reverse) coloca a todos uno por encima del otro
- /<flex-wrap>: Viene por defecto en (no-wrap) si se cambia a (wrap) el contenido se va a organizar en el contenedor sin salirse del mismo
- /<flex-flow>: Resume el (direction) y (wrap) en este mismo orden.
- /<justify-content>: Alinea todo el contenido en el eje de las X
- /<align-items>:  Alinea todos los items dentro del contenedor en el eje de las Y ( solo se usa este porque flexbox opera en un eje y tambien por defecto este viene en rows)
- /<align-content>: Alinea todo el contenido en el eje de las Y
