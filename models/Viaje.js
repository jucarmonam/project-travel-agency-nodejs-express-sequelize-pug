import Sequelize from 'sequelize';
import db from '../config/db.js';

//Aqui primero ponemos el nombre de la tabla y tambien pasamos sus propiedades de la base de datos osea los nombres
export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE 
    },
    fecha_vuelta: {
        type: Sequelize.DATE 
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});