// Returns array of trips objects
const retrieveTrips = () => {
    const trips = localStorage.getObjectItem('trips');
    return trips;
};

export default retrieveTrips;
