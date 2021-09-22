import Trip from '../src/client/views/page-trips/js/trip_model'

describe('Trip model', () => {
    it('it should create an instance from Trip', () => {
        const newTrip = new Trip('city', 'country', 12, 13, {});
        expect(newTrip.country).toEqual('country');
    });
})
