import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Pasajeros from './Pasajeros';
import Factura from './Factura';

const Boleto = sequelize.define('boleto', { 
    nombre: { type: Sequelize.STRING(20)},
    apellido: { type: Sequelize.STRING(20)}, 
    bioseguridad: { type: Sequelize.STRING(50)},
    precio: { type: Sequelize.INTEGER},
    id_bus: { type: Sequelize.INTEGER},
    origen: { type: Sequelize.STRING(20) },
    destino: { type: Sequelize.STRING(20)}, 
    hrs_salida: { type: Sequelize.TIME },
    fecha_salida: { type: Sequelize.DATE },
    ubicacion:{ type: Sequelize.STRING(20) },
    id_buses: { type: Sequelize.INTEGER},
    nro_asiento: { type: Sequelize.INTEGER }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Boleto;