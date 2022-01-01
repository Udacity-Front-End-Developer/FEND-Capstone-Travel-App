// TODO: Refactor this to make it behave like a proper database with some CRUD operations.
const addTripToStorage = (trip) => {
  const arrayOfTrips = localStorage.getObjectItem('trips');
  arrayOfTrips.push(trip);
  localStorage.setObjectItem('trips', arrayOfTrips);
};

const removeTripFromStorage = (city) => {
};

export {
  addTripToStorage,
};
