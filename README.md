# WEB APPS

HTTP es propio de node

Request: Toda la informacion que me esta pidiendo (URL, Headers, Argumentos) el WebServer, el usuario es el que envia esta petición
Response: La respuesta que va a recibir el cliente cuando pase el "Request"


## EXPRESS
El uso de express nos permite hacer un rapido manejo de HTTP y sus headers en rutas separadas. Esto me permite controlar las expcepciones en rutas no controladas.


## Notas:
La variable "__dirname" en un script retorna el path de la carpeta donde el archivo de javascript actual se encuentra.
Para poder imprimir en javascript un "\" y que no lo tome como un caracter de escape, debo escribirlo de la siguiente forma "\\"


## Handlebars
Ventajas:
+ Reutilizar secciones de codigo (Como headers, footers, sections.

Los handlebars son utiles cuando se trata de desplegar una webapp relativamente sencilla. Cuando veamos que el proyecto va a escalar en un futuro es mejor usar un framework como React o Angular.

Nos permite hacer una webapp y la permite renderizar desde el backend para que entregarle a un cliente una webapp ya renderizada.

Si estamos usando Express, dentro de la documentación de Handlebars en la parte inferior podemos observar que  debemos usar HBS.

De forma predefinida handlebars busca las vistas que va a renderizar en una carpeta llamada "views". Todas estas vistas tendran que usar el formato ".hbs".

## Partials
Los partials me permiten reutilizar codigo como los headers, footers, etc.

Para hacer uso de ellos y crearlos, crearemos la carpeta views/partials. En su interior tendremos los archivos hbs con el codigo html a reutilizar. Para renderizarlos nos ubicamos en el archivo que vaya a usar el componente y usaremos la siguiente notación
```
{{> *Nombre del componente*}}
```

Para que hbd renderize correctamente la pagina web con sus estilos css se agrega la siguiente linea de codigo
```
app.use(express.static(path.join(__dirname, '/views')));
```

## Desplegar aplicación
1. En el lugar donde vaya a desplegar la aplicación, es poco probable que vaya a hacerlo en el puerto 8080. Es por esto que se define una var de entorno para el puerto haciendo del paquete 'dotenv'.
2. Dentro del archivo 'package.json' necesito declarar un script llamado start que es el que le va a indicar al hosting el comando para levantarlo.
```
"scripts": {
    "start": "node index.js"
}
```

El despliegue de la aplicación se hara en Heroku

Practica Curso Udemy