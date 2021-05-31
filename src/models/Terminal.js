import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Gestor_buses from './Gestor_buses';
import Chofer from './Chofer';

const Terminal = sequilize.define('terminal', {
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
    id: {
        type: Sequelize.STRING(10),
        primarykey: true
    },
}, {
    timestamps: false,
    freezeTableName: true
});

 Terminal.hasMany(Gestor_buses, {foreignkey: 'id_terminal'});
Gestor_buses.belongsTo(Terminal, {foreignkey: 'id_terminal'});

Terminal.hasMany(Chofer, {foreignkey: 'id_terminal'});
Chofer.belongsTo(Terminal, {foreignkey: 'id_terminal'}); 

export default Terminal;