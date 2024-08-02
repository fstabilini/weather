# Para empezar

Hacer un repositorio en github y conectarlo con el codigo local.
Cada dia al terminar de programar, subir los cambios con git add, git commit, git push

# API que usaremos

https://api.weatherapi.com/v1/

Para poder usar esta API hace falta en todos los requests utilizar un API key como parametro. Investigar y aprender sobre enviar prametros

Tu API key es 0a062eeb23cf442db63134744240108

Cada request se va a ver mas o menos asi:

https://api.weatherapi.com/v1/astronomy.json?key=0a062eeb23cf442db63134744240108

Cuando uno usa parametros, siempre el formato de los parametros es ?key=value

Si hay mas de un parametro, se separan por &. Entonces como se veria algo asi

https://urlbase.com/endpoint?nombre=florencia&apellido=stabilini&api_key=1283723762734

Un ejemplo real de esta API es:

https://api.weatherapi.com/v1/current.json?key=0a062eeb23cf442db63134744240108&q=33130

En este caso, tenemos el parametro key, con el valor del api key, y tenemos el parametro q, con el valor 33130, separado por &

Otro ejemplo real:

https://api.weatherapi.com/v1/future.json?key=0a062eeb23cf442db63134744240108&q=33130&dt=2024-09-20&lang=hi

Aca tenemos parametro key con el valor del api key, parametro q con el zipcode, parametro dt con la fecha y parametro lang con el idioma

# Paginas de la app

0. HOME: una pagina presentacional donde explica lo que es esto, que API se utiliza, etc. Que se puede hacer en cada una

1. TODAY: Pagina para ver el clima de hoy. Tiene que tener un formulario y donde pueda elegir:
   A. Zipcode
   B. Lenguaje (esto que sea un dropdown, y que tenga las opciones que van bien con la API. ver la lista que hay en https://www.weatherapi.com/docs/#intro-request y elegir 5-10 idiomas de ahi)

Cuando uno hace click en "Send" en el formulario, deberia ahora aparecer en una tarjeta o algo abajo

    1. Location (Name, Region, country, local time)
    2. Icon
    3. Condition (partly cloudy por ejemplo)
    4. Direccion del viento
    5. Temperatura en C y en F
    6. Que diga si es de dia o de noche (es un booleano is_day)

2. FORECAST: aqui vamos a querer ver las maximas y las minimas de los proximos dias. Uno tiene que poder elegir
   A. Zipcode
   B. Cantidad de dias que uno quiere ver de forecast

Cuando uno hace click en "Send en el formulario" ahora aparecen una serie de tarjetas (una por cada dia), y cada tarjeta tiene: 1. Temperatura maxima y minima en C y en F (Por ejemplo: Maxima 30C/84F Minima 28C/82F) 2. Humedad 3. Chances de lluvia

3. MOON: Pagina para ver el estado de la luna hoy. Tiene que tener un formulario y donde pueda elegir:
   A. Zipcode
   B. Fecha

Cuando uno hace click en "Send" en el formulario, deberia ahora aparecer en una tarjeta o algo abajo que tenga
A. Fase de la luna
B. Cuando sale la luna
C. Cuando se pone
D. Iluminacion de la luna
E. Lugar (Ciudad, Pais)

# Otros componentes

1. NAVIGATION: ls paginas deben tener un menu de navegacion que permita ir a HOME, TODAY, FORECAST y MOON

2. FOOTER: las paginas deben tener un footer con iconos de redes sociales y con el copyright escrito (e.g. "Weather API, copyright)

# Estructura de Carpetas y archivos, y otros

1. APP: este componente tiene que hacer el pedido principal a la API y tiene que tener react router

2. Utilizar componente.module.scss en cada componente, asi no se mezclan los CSS a lo largo del proyecto. Esto va a implicar utilizar {} para el CSS en los componentes. Investigar con ChatGPT como funciona module.css y como aplicar esto.

3. Utilizar SASS. No es necesario usar BEM. Utilizar variables y anidamiento. Revisar proyectos de brain station en react para ver la estructura de carpetas y refrescar como funcionaba.
