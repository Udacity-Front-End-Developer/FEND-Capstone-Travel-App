import './main.scss';
import '../../js/storage';
import '../../js/serviceWorkerRegistration';
import noTripsHandler from './js/noTripsHandler';
import displayTrips from './js/displayTrips';

// Checks if there are any trips in the storage.
if (!localStorage.getObjectItem('trips') || localStorage.getObjectItem('trips').length < 1) {
  // If no trips found, initialize an empty entry.
  localStorage.setObjectItem('trips', []);
  noTripsHandler();
} else {
  displayTrips();
}

if (module.hot) {
  module.hot.accept();
}
