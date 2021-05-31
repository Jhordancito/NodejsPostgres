import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Gestor_buses from './Gestor_buses';
import Chofer from './Chofer';

const Terminal = sequilize.define('terminal', {
    nombre_terminal: {
        type: Sequelize.character_varyin(20), 
    }, 
    administrador: {
        type: Sequelize.character_varyin(20), 
    },
    direccion: {
        type: Sequelize.character_varyin(20), 
    },
    telefono: {
        type: Sequelize.character_varyin(20), 
    },
    id: {
        type: Sequelize.character_varyin(20),
        primarykey: true
    },
}, {
    timestamps: false
});

/* Terminal.hasMany(Gestor_buses, {foreignkey: 'id_terminal', sourceKey: 'id'});
Gestor_buses.belongsTo(Terminal, {foreignkey: 'id_terminal', sourceKey: 'id'});

Terminal.hasMany(Chofer, {foreignkey: 'id_terminal', sourceKey: 'id'});
Chofer.belongsTo(Terminal, {foreignkey: 'id_terminal', sourceKey: 'id'}); */

export default Terminal;