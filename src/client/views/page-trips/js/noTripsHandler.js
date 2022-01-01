import addTrip from './addTrip';

const noTripsHandler = () => {
  const errorWrapper = document.createElement('div');
  const errorTextElement = document.createElement('h1');
  const errorTextNode = document.createTextNode('Ooops! it seems that you have no trips planned');
  const button = document.createElement('button');
  errorTextElement.appendChild(errorTextNode);
  errorWrapper.appendChild(errorTextElement);
  errorWrapper.classList.add('error_wrapper');
  button.innerText = 'Add Trip';
  button.classList.add('btn-pill');
  // on click, shows the form.
  button.addEventListener('click', addTrip);
  errorWrapper.appendChild(button);
  document.querySelector('.trips_container').appendChild(errorWrapper);
};

export default noTripsHandler;
