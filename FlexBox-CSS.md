# FLEX BOX
- La caracteristica basica de flexbox es que esta pensada para trabajar una unica fila y una unica columna 

- Mientras que grid se encarga de manejar multiples filas y columnas

- Conceptos basicos 
    - Main Start Main End = Ancho de la caja en el eje X
    - Eje Principal el eje de las X
    - Eje Cruzado el eje de las Y
    - Cross Start Cross End = Alto de la caja en el eje Y
    - Flex item esta dentro del contenedor flexbox o flex-container
    - Cuando flexbox es definido sus hijos directos empiezan a actuar bajo la misma propiedad por ende puedes cambiar el orden con el que se muestran con la propiedad /<order>
    - /<flex-grow>: le permite a las propiedades crecer dinamicamente con todo el espacio que tiene disponible por defecto viene en (0)
    - /<flex-basis>: Se utiliza para darle un tamaño inicial y que se utiliza con flex-grow 
    - /<flex>: /<flex-grow y flex-basis>
    - align-content determina el espacio entre las líneas, mientras que align-items determina como los elementos en su conjunto están alineados dentro del contenedor. Cuando hay solo una línea, align-content no tiene efecto.
    - /<flex-flow> Las dos propiedades <flex-direction> y <flex-wrap> son usadas a menudo en conjunto con la propiedad abreviada flex-flow, la cual fue creada para combinarlas. Esta propiedad abreviada, acepta un valor de cada una separada por un espacio. Por ejemplo, puedes usar flex-flow para establecer filas y envolverlas.
    - /<flex-wrap> se usa para cambiar como se acumulan los objetos.
## Display Flex

- Cambia la distribucion de como esta ordenado el contenido
- /<flex-direction>: row/row-reverse = es el estado predeterminado y coloca a todos uno al lado del otro y con (column/column-reverse) coloca a todos uno por encima del otro
- /<flex-wrap>: Viene por defecto en (no-wrap) si se cambia a (wrap) el contenido se va a organizar en el contenedor sin salirse del mismo
- /<flex-flow>: Resume el (direction) y (wrap) en este mismo orden.
- /<justify-content>: Alinea todo el contenido en el eje de las X
- /<align-items>:  Alinea todos los items dentro del contenedor en el eje de las Y ( solo se usa este porque flexbox opera en un eje y tambien por defecto este viene en rows)
- /<align-content>: Alinea todo el contenido en el eje de las Y
- /<align-self>: Nos permite alinear nuestro contenido del item en base al eje principal que estamos utilizando.

### Juego de Flexbox "flexboxfroggy"
