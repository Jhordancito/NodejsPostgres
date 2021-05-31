import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Bus from './Bus';

const Chofer = sequelize.define('chofer', {
    id: {
        type: Sequelize.INTEGER,
        primarykey: true
    },
    nombre: {
        type: Sequelize.TEXT, 
    },
    apellido: {
        type: Sequelize.TEXT,
    }, 
    genero: {
        type: Sequelize.TEXT, 
    },
    direccion: {
        type: Sequelize.TEXT,
    }, 
    tipo_sangre: {
        type: Sequelize.TEXT,
    },
    telefono: {
        type: Sequelize.INTEGER,
    },
    id_terminal: {
        type: Sequelize.TEXT,
    },
}, {
    timestamps: false
});
/*
Chofer.hasMany(Bus, {foreignkey: 'id_chofer', sourceKey: 'id'});
Bus.belongsTo(Chofer, {foreignkey: 'id_chofer', sourceKey: 'id'});
*/
export default Chofer;