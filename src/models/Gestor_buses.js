import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Bus from './Bus';
import Boleto from './Boleto';
import Capacidad from './Capacidad';

const Gestor_buses = sequelize.define('gestor_buses', {
    tipo_bus: {
        type: Sequelize.STRING(20), 
    },
   nombre_bus: {
        type: Sequelize.STRING(20),
    }, 
    fecha: {
        type: Sequelize.DATE
    },
    id_terminal: {
        type: Sequelize.STRING(20), 
    },
   modelo: {
        type: Sequelize.STRING(20),
    }, 
    color: {
        type: Sequelize.STRING(20),
    },
    capacidad: {
        type: Sequelize.INTEGER,
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

Gestor_buses.hasMany(Bus, {foreignkey: 'id_buses', sourceKey: 'id'});
Bus.belongsTo(Gestor_buses, {foreignkey: 'id_buses', sourceKey: 'id'});

Gestor_buses.hasMany(Boleto, {foreignkey:'id_buses', sourceKey: 'id'});
Boleto.belongsTo(Gestor_buses, {foreignkey:'id_buses', sourceKey: 'id'});

Gestor_buses.hasMany(Capacidad, {foreignkey:'id_buses',  sourceKey: 'id'});
Capacidad.belongsTo(Gestor_buses, {foreignkey:'id_buses',  sourceKey: 'id'});

export default Gestor_buses;