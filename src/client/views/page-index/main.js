import './main.scss';

import '../../js/serviceWorkerRegistration';

// import countryInputHandler from './js/countryInputHandler';
import '../../js/storage';

/*
** Enables hot reload for webpack server.
*/
if (module.hot) {
  module.hot.accept();
}
