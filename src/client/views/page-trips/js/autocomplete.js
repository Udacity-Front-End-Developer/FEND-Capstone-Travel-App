// eslint-disable-next-line import/named
import * as helpers from './autocompleteHelpers';

/**
 * Main handler of the autocomplete feature.
 * @param {HTMLElement} inputElm - Form's input element.
 * @see {@link https://www.w3schools.com/howto/howto_js_autocomplete.asp}.
 */
const autocomplete = (inputElm) => {
  // remove any txt errors.
  document.querySelector('.country-input-error').innerText = '';
  let resultsContainer;
  // This will holds the parent node.
  const parent = inputElm.parentNode;
  //  This holds the value from the input.
  const { value } = inputElm;
  // This will check the DOM for existing resultsContainer.
  const hasResultsContainer = !!document.querySelector('.results');
  // If no value, empty list and return false.
  if (!value && hasResultsContainer) {
    helpers.emptyListContainer();
    helpers.removeListContainer();
    return;
  }
  if (hasResultsContainer) {
    resultsContainer = document.querySelector('.results');
  } else {
    /**
    * Else if resultsContainer doesn't exist, create it and attach an event
    * listener to it.
    * The event(click) listener is attached once we create resultsContainer.
    */
    // This creates a container to hold the list of suggested items.
    resultsContainer = document.createElement('div');
    // This gives resultsContainer a class.
    resultsContainer.setAttribute('class', 'results');
    // This appends resultsContainer to the input's parent.
    parent.appendChild(resultsContainer);
    // This adds click event to listen on the list items.
    resultsContainer.addEventListener('click', helpers.resultItemOnClick);
    document.addEventListener('click', () => {
      helpers.removeListContainer();
    });
  }
  // This generates items for the resultsContainer.
  helpers.generateResultsItems(resultsContainer, value);
};

export default autocomplete;
