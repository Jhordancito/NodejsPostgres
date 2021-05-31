import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Pasajeros = sequelize.define('pasajeros', {
    cedula: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fecha_nacimiento: {
        type: Sequelize.TEXT,
    }, 
    genero: {
        type: Sequelize.TEXT,
    },
    telefono: {
        type: Sequelize.INTEGER,
    },
    direccion: {
        type: Sequelize.TEXT,
    },
    id_boleto: {
        type: Sequelize.INTEGER,
    },
}, {
    timestamps: false
});



export default Pasajeros;