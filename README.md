
# Para desplejar el proyecto
# Base de Datos #
1. Descargar e instalar Docker (https://www.docker.com/get-started) para utilizar los recursos de MySQL. 
2. Una vez instalado, abrir una nueva consola(en mi caso una consola dentro de Visual Studio Code) y posicionarse en la carpeta contenedora del proyecto.
3. En la consola, comprobar que Docker esta instalado correctamente mediante el comando: `docker --version`
4. Lo siguiente es crear un contenedor en el sistema mediante Docker (desde la consola) con el comando: `docker run --name mysqldb -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=aplicacionbd -d -p 3306:3306 mysql:latest`
# Extensiones Visual Studio Code #
Para este proyecto utilicé el siguiente listado de extensiones para una mayor productividad
1. Java Extension Pack
2. Spring Boot Extension Pack
3. Lombok

# Iniciar Base de Datos
Para iniciar la Base de Datos, se debe iniciar mediante el `Spring Boot Dashboard` disponible en Visual Studio Code.

# Dependencias de React utilizadas
Se utilizaron las siguientes dependencias para el correcto funcionamiento del proyecto, instalar todas antes de ejecutar la aplicacion

1.  react-redux (`npm i react-redux`)
2.  react scripts (`npm i react-scripts`)
3.  redux  (`npm i redux`)
4.  redux-thunk (`npm i redux-thunk`)
5.  react-router-dom (`npm i react-router-dom`)
6.  axios (`npm i axios`)
7.  bootstrap (`npm i bootstrap`)
8.  reacstrap (`npm i reactstrap react react-dom`)

## Iniciar la aplicacion

### `npm start`

La app se inicia en modo development.\
[http://localhost:3000](http://localhost:3000) para ser visto en el navegador o [http://localhost:8081](http://localhost:8081)  .

## Cualquier duda o consulta contactarme por correo

