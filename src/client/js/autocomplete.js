import { generateAutocompleteItems } from './autocompleteHelpers';

const list = require('./countryList');

/**
 * @params: {Object} input - Form's input element
 * @params: {Array} list - The possible autocompleted values
 * @see: https://www.w3schools.com/howto/howto_js_autocomplete.asp
 */
const autocomplete = (inputElm) => {
    // This will help to highlight the selected item in the list.
    let currentFocus;
    // This listens for user input.
    // inputElm.addEventListener('input', () => {
    // This holds the value from the input.
    const { value } = inputElm;
    // This closes any open lists.
    closeAllList();
    if (!value) return false;
    currentFocus = -1;
    // This creates a container to hold the list items.
    const listContainer = document.createElement('div');
    listContainer.setAttribute('id', `${inputElm.id}-autocomplete-list`);
    listContainer.setAttribute('class', 'autocomplete-items');
    // This appends the list countainer to the input container.
    inputElm.parentNode.appendChild(listContainer);
    // This generates items for the auto complete box.
    generateAutocompleteItems(listContainer, list.countries, value);
    // listContainer.appendChild(items);
    // Update the input with an item from the autocomplete list.
    listContainer.addEventListener('click', (event) => {
        /** This will serve as an event delegation, will only run the event
         *  if the target is an item of the suggested list
         * */
        if (event.target.classList.contains('autocomplete-list-item')) {
            // eslint-disable-next-line no-param-reassign
            inputElm.value = event.target.dataSet.value;
        }
    });
    // });
};

export default autocomplete;
