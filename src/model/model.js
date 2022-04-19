import { connection } from '../database/connection.js'
import Sequelize from 'sequelize'

export const model = connection.define('login', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
})