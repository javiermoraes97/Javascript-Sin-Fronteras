# Cascade Style Sheet

Primeras notas de css

## Selectores
- Selectores Globales \* body p img span y todos los selectores de html
- Selector Class .
- Selector ID #
- a:link
- a:hover
- a:active
- a:visited
- a:nth-child(even)

## Propiedades importantes
- Display = Sirve para vero cambiar el como se visualizan los elementos
- Box Model
- Margin = es el espacio externo del contenido.
- Padding = es el espacio interno del contenido.
- Border = es el espacio que rodea el contenido esta ubicado entre el margin y sobre el padding
- Border Radius = Es el cambio de la curva que existe en las ezquinas
- Width = Es el ancho total del contenido en el eje X
- Heigth = Es la altura total del contenido en el eje Y
- Color = Cambia el color del texto
- Background = Cambia el color o forma del fondo
- Text Align = Sirve para alinear el texto
- Text Decoration = Sirve para cambiar decoraciones de los textos y lineas etc
- Text Transform = Sirve para cambiar las mayusculas o minisculas del texto
- Text Ident = Sirve para modificar el identado de los textos
- Letter Spacing = Cambia la separacion entre cada una de las letras
- Line Height = Cambia la altura de la separacion de los textos
- Word Spacing = Agrega espacio entre cada una de las palabras
- Border collapse = Elimina el margen de los border con otros bordes
- Max width = Ancho maximo que puede utilizar y no del que va a tener
- Position = Por defecto todos los elementos viene con la propiedad \<estatic> se puede cambiar a
    - \<relative> = que es  
    - \<fixed> = Deja fijo el elemento a la pantalla
    - \<absolute> = Mantiene su posicion con respecto a la posicion de su padre
- Overflow = Sirve para esconder mostrar o colocar un scroll cuando un un contenido supera a su contenedor.
- float = Sirve para especificar para que un elemento flote
- Opacity = recibe una valor de 0 a 1 donde 1 es solido y 0 es invisible
- Cursor = Sirve para cambiar el cursor en el sitio con pointer
- Background = puede ser imagenes patrones y otras cosas mas
- Box shadow = \(Abajo Derecha Blur color"Usar rgba") Sirve para crear las sombras en un elemento, y si le colocas \<inset> podras ver las sombras internas que da una sensacion de hundido
- Text Shadow = usa los mismos parametros que box shadow pero en este caso es para el texto

## Tablas
- Este tema es mas de html pero 
- Una tabla se divide en 
- \<table> Es la estructura inicial de la tabla
- \<thead> Es la cabezera de la tabla
- \<tr>
- \<th>
- \<tbody> Es el cuerpo de la tabla
- \<tr> Crea las filas
- \<td> Crea las columnas o celdas del tr
- \<tfoot> Es el pie de pagina de la tabla
- \<tr> Crea las filas
- \<td> Crea las columnas o celdas del tr

## Transform en 2 dimensiones

-\<transform> Sirve para cambiar la direccion, rotacion y desplazamiento del elemento.
    - Rotate = \(gira el elemento 20deg)
    - Translate = \(Eje x, Eje Y)
    - Scale = \(Eje x, Eje y)
    - Skew = \(Eje x, Eje y) Sirve para retorcer

## Transform en 3 dimensiones

-\<transform> Sirve para cambiar la direccion, rotacion y desplazamiento del elemento pero ahora en 3 dimensiones tambien. Pero tambien hay que indicarle el eje donde uno quiere que gire
    - Rotate = \(Eje x, Eje Y , Eje z)
    - Translate = \(Eje x, Eje Y , Eje z)
    - Scale = \(Eje x, Eje Y , Eje z)
    - Skew = \(Eje x, Eje Y , Eje z) Sirve para retorcer

## Transiciones animadas

-\<transition> Transiciones de una valor a otro de manera suave.
- Transition = width 0.3s ease
- transitio-delay = retrasa la animacion en cuanto necesitemos
- :hover = 150px

## Etiquetas html que son bloques
- \<p>
- \<div>
- \<h1>
- \<form>
- \<header>
- \<footer>
- \<section>

## Etiquetas html que son inline
- \<span>
- \<links>
- \<img>

## Especificidad