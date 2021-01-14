import Sequelize from 'sequelize';
import db from '../config/db.js';

//Aqui primero ponemos el nombre de la tabla y tambien pasamos sus propiedades de la base de datos osea los nombres
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING 
    }
});