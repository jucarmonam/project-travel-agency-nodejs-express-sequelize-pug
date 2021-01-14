import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));

const port = process.env.PORT || 4000;

//Cada uno de este app. son un middleware de express los cuales se ejecuta en pila

//Habilitamos el template engine pug el cual es de los mas utilizados y con sintaxis mas sencilla, en si un template engine es como el jsx de react o el uso de vuejs normal
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req, res, next) => {
    //en res.locals podemos tener variables y agregar nuevas que podemos compartir entre archivos o vista osea pasar variables de un archivo a otro y ademas las cuales no necesitamos especificar como res.locals.nombreVariable sino directamente en los archivos pug poder escribir el nombre de esta y ya la tenemos
    //console.log(res.locals);

    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    return next();//con esto hacemos que pase al siguientes middleware, pero aveces esto no sirve asi que para hacerlo de manera forzosa se lo mandamos con un return
})

//Agregar body parse para poder leer datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica a la cual ahora express podra tener acceso
app.use(express.static('public'));

//Agregar router
app.use('/', router);//con el uso le pasamos todos los verbos de get, put etc. desde la pagina principal agregando router el cual tiene las vistas o rutas

/*
//req - lo que enviamos : res - lo que express nos responde
app.get('/', (req, res) => {
    //res.send('Hola Mundo'); //podemos enviar texto asi
    //Podemos enviar como respuesta un json
    res.json({
        id: 1
    })
   res.send('Inicio');
})
*/

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})