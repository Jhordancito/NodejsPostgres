import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Gestor_buses from './Gestor_buses';
import Chofer from './Chofer';

const Terminal = sequelize.define('terminal', {
    nombre_terminal: {
        type: Sequelize.STRING(20), 
    }, 
    administrador: {
        type: Sequelize.STRING(20), 
    },
    direccion: {
        type: Sequelize.STRING(20), 
    },
    telefono: {
        type: Sequelize.STRING(20), 
    },
}, {
    timestamps: false,
    freezeTableName: true
});
/*
Terminal.hasMany(Gestor_buses, {foreignkey: 'id_terminal', sourceKey: 'id'});
Gestor_buses.belongsTo(Terminal, {foreignkey: 'id_terminal', sourceKey: 'id'});

Terminal.hasMany(Chofer, {foreignkey: 'id_terminal', sourceKey: 'id'});
Chofer.belongsTo(Terminal, {foreignkey: 'id_terminal', sourceKey: 'id'}); 
*/
export default Terminal;