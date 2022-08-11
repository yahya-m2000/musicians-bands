const {db} = require('./db');
const {Band, Musician} = require('./index')
const {
    seedBand,
    seedMusician,
    seedSong,
  } = require('./seedData');
const { Song } = require('./Song');

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        const newBand = await Band.create(seedBand[0])
        expect(newBand.name).toBe(seedBand[0].name);
        expect(newBand.genre).toBe(seedBand[0].genre);
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name: 'Tim Henson',
            instrument: 'Electric Guitar'
        })
        expect(testMusician.name).toBe('Electric Guitar');
        expect(testMusician.instrument).toBe('Electric Guitar');
    })

    test('Band can have many Musicians', async () => {
        await db.sync({ force: true})

        const newBand = await Band.create(seedBand[0])

        const newMusician = await Musician.create(seedMusician[0])

        await newBand.addMusician(newMusician);

        const guitarist = await newBand.getMusicians()
        
        expect(guitarist instanceof Musician).toBeTruthy
    })
    
    test ('Band can have many Song', async () => {
        await db.sync({ force: true})

        const newBand = await Band.create(seedBand[0])

        const newSong = await Song.create(seedSong[0])

        await newBand.addSong(newSong);

        const song = await newBand.getSongs()

        expect(song instanceof Song).toBeTruthy

    })
    test.only('Bands can have same Song', async () => {
        await db.sync({ force: true})

        const newBand = await Band.create(seedBand[0])
        const newBand2 = await Band.create(seedBand[1])

        const newSong = await Song.create(seedSong[0])

        await newBand.addSong(newSong);
        await newBand2.addSong(newSong);

        const song = await newBand.getSongs()

        expect(song instanceof Song).toBeTruthy

    })
})