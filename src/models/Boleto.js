import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Boleto = sequelize.define('boleto', { 
    nombre: { type: Sequelize.TEXT},
    apellido: { type: Sequelize.TEXT}, 
    bioseguridad: { type: Sequelize.TEXT},
    precio: { type: Sequelize.INTEGER},
    id_bus: { type: Sequelize.INTEGER},
    origen: { type: Sequelize.TEXT },
    destino: { type: Sequelize.TEXT}, 
    hrs_salida: { type: Sequelize.TIME },
    fecha_salida: { type: Sequelize.DATE },
    ubicacion:{ type: Sequelize.TEXT },
    id_buses: { type: Sequelize.INTEGER},
    nro_asiento: { type: Sequelize.INTEGER },
    id: { type: Sequelize.INTEGER,primaryKey: true },
}, {
    timestamps: false,
    freezeTableName: true,
});
export default Boleto;