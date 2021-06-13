import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Bus from './Bus';

const Chofer = sequelize.define('chofer', {
    
    nombre: {
        type: Sequelize.STRING(20), 
    },
    apellido: {
        type: Sequelize.STRING(20),
    }, 
    genero: {
        type: Sequelize.STRING(20), 
    },
    direccion: {
        type: Sequelize.STRING(20),
    }, 
    tipo_sangre: {
        type: Sequelize.STRING(20),
    },
    telefono: {
        type: Sequelize.INTEGER,
    },
    id_terminal: {
        type: Sequelize.STRING(20),
    },
}, {
    timestamps: false,
    freezeTableName: true
});
/*
Chofer.hasMany(Bus, {foreignkey: 'id_chofer', sourceKey: 'id'});
Bus.belongsTo(Chofer, {foreignkey: 'id_chofer', sourceKey: 'id'});
*/
export default Chofer;