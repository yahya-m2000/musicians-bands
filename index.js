const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

Musician.belongsTo(Band)
Band.hasMany(Musician)
Song.belongsTo(Band)
Band.hasMany(Song)
// Song.hasMany(Band)



module.exports = {
    Band,
    Musician,
    Song,
};
