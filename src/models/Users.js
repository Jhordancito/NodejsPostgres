import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Users = sequelize.define('users', {
    id: { type: Sequelize.INTEGER,primaryKey: true },
    nombre: {
        type: Sequelize.STRING(20), 
    }, 
    password: {
        type: Sequelize.STRING(255), 
    }, 
    email: {
        type: Sequelize.STRING(20),
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Users;
