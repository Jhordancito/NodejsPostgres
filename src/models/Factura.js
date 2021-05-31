import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Factura = sequelize.define('factura', {
    nit: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_completo: {
        type: Sequelize.STRING(20), 
    },
    id_boleto: {
        type: Sequelize.INTEGER,
    },
}, {
    timestamps: false,
    freezeTableName: true
});


export default Factura;