const {db} = require('./db');
const {Band, Musician} = require('./index')

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
        x = await Band.create({
            name: 'Polyphia',
            genre: 'Math Rock'
        })
        expect(x.name).toBe('Polyphia');
        expect(x.genre).toBe('Polyphia');
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
})