import './main.scss';
import noTripsHandler from './js/noTripsHandler';
import '../js/storage';

// If no trips show error message.
if (localStorage.length < 1) {
    localStorage.setObjectItem('trips', []);
    noTripsHandler();
}

if (module.hot) {
    module.hot.accept();
}
