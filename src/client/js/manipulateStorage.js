const addTripToStorage = (trip) => {
    const arrayOfTrips = localStorage.getObjectItem('trips');
    arrayOfTrips.push(trip);
    localStorage.setObjectItem('trips', arrayOfTrips);
};

const removeTripFromStorage = (city) => {

};

export {
    addTripToStorage
}
