import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Capacidad = sequelize.define('capacidad', {
    id_bus: {
        type: Sequelize.INTEGER,
    },
    id_buses: {
        type: Sequelize.INTEGER,
    },
    nro_asiento: {
        type: Sequelize.INTEGER,
    },
    id: {
        type: Sequelize.INTEGER,
        primarykey: true
    },
}, {
    timestamps: false
});


export default Capacidad;