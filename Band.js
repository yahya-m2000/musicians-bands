const {db} = require('./db');
const { DataTypes } = require('sequelize');

// TODO - define the Band model
const Band = db.define('Band', {
    name: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING

    },
})

module.exports = {
    Band
};