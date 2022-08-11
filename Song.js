const {db} = require('./db');
const { DataTypes } = require('sequelize');

// TODO - define the Band model
const Song = db.define('Song', {
    title: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER

    },
})

module.exports = {
    Song
};