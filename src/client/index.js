import './styles/base.scss';
import './styles/form.scss';
// import test from './img/test.png';
// import seaFront from './img/sea-front.png'
// require './img'/;
import countryInputHandler from './js/countryInputHandler';

let req = require.context('./img/', false, /.*\.png/);
req.keys().forEach((key) => {
  req(key);
});

// // Updates value with selected country from the suggestion list.
document.querySelector('#country-input').addEventListener('input', (e) => countryInputHandler(e));

// document.querySelector('img').src = test;

if (module.hot) {
  module.hot.accept();
}
