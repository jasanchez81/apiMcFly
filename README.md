# apiMcFly

Para la construcción de esta API se ha utlizado Node.js con Express.

Se prepara el proyecto enfocado en el patrón MVC separando los ficheros de acuerdo a sus funcinalidades.

En el fichero db.json se crea un objeto con los datos de los tweets y se accede a la escritura y lectura del fichero
con la librería fs que nos proporciona Node.js.

Ese fichero sería nuestro sistema de persistencia de datos. Lo suyo sería conectarse a una BBDD relacional o no, dependiendo
del enfoque de la aplicación. Por ejemplo si es una aplicación que necesita muchas escrituras en BBDD vendría mejor una bbdd
relacional (MySQL, Postgress, etc.) si por el contrario la aplicación realiza mas lecturas que escrituras sse optaría mejor
por una BBDD documental tipo MONGODB apoyándose en un ORM como Mongoose por ejemplo.

Api creada pendiente de las pruebas unitarias(Mocha, Jazmine, etc.)
