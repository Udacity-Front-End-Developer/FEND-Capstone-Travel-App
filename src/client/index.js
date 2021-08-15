import countryInputHandler from './js/countryInputHandler';

/**
*The following import functions are a solution to require all the files in the
* img/ and styles/ directories using the context module API
*@see: https://webpack.js.org/guides/dependency-management/#context-module-api
*/
const importAllStyles = (request) => {
  request.keys().forEach((key) => request(key));
};
importAllStyles(require.context('./styles/', false, /\.scss$/));

const imagesImport = require.context('./img/', false, /.*\.(png|jpg)/);
imagesImport.keys().forEach((key) => {
  imagesImport(key);
});

// // Updates value with selected country from the suggestion list.
document.querySelector('#country-input').addEventListener('input', (e) => countryInputHandler(e));

// document.querySelector('img').src = test;

/*
Grap data from the user.
Show the user his input and ask him to confirm it.
Send data to the server and add it to the list of trips.
Communicate to the user that his trip was succesfully saved.
*/
document.querySelector('.form__submit').addEventListener('click', (e) => {
  e.preventDefault();
  const countryData = document.querySelector('#country-input').value;
  const date = document.querySelector('#date').value;
  console.log(countryData, date);
});

// This adds image background to hero
// document.querySelector('.hero').style.background = 'url(./img/hero.jpg)';

if (module.hot) {
  module.hot.accept();
}
