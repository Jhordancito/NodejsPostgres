import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Capacidad from './Capacidad';
import Boleto from './Boleto';

const Bus = sequelize.define('bus', {
    id: {
        type: Sequelize.INTEGER,
        primarykey: true
    },
    id_buses: {
        type: Sequelize.INTEGER,
    },
    ruta: {
        type: Sequelize.TEXT,
    }, 
    id_chofer: {
        type: Sequelize.INTEGER,
    },
    placa: {
        type: Sequelize.TEXT,
    },
    chasis: {
        type: Sequelize.INTEGER,
    },

}, {
    timestamps: false,
    freezeTableName: true
});

Bus.hasMany(Capacidad, {foreignkey: 'id_bus'});
Capacidad.belongsTo(Bus, {foreignkey: 'id_bus'});

Bus.hasMany(Boleto, {foreignkey: 'id_bus'});
Boleto.belongsTo(Bus, {foreignkey: 'id_bus'});

export default Bus;