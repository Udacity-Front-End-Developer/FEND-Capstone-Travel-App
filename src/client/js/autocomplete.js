// import { generateAutocompleteItems } from './autocompleteHelpers';

const { countries } = require('./countryList');

/**
 * Create suggested coutry items from the input and appends them to the list container.
 * @param {HTMLElement} parent - The list container element.
 * @param {Array} list - List of all the countries.
 * @param {String} value - The value of the input.
 */
const generateAutocompleteItems = (parent, list, value) => {
    const fragment = new DocumentFragment();
    list.forEach((country) => {
        // This checks if country starts with same letters as the value.
        if (country.substr(0, value.length).toLowerCase() === value.toLowerCase()) {
            const listItem = document.createElement('div');
            listItem.innerHTML = `<strong>${country.substr(0, value.length)}</strong>${country.substr(value.length)}`;
            // This sets a data attr that will hold the value of the item.
            listItem.setAttribute('data-value', country);
            // This gives the item a class.
            listItem.setAttribute('class', 'autocomplete-list-item');
            fragment.appendChild(listItem);
        }
        parent.appendChild(fragment);
    });
};

const emptyListContainer = () => {
    const element = document.querySelector('.autocomplete-items-list');
    element.innerHTML = '';
};

const removeListContainer = () => {
    console.log('list removed!');
    const element = document.querySelector('.autocomplete-items-list');
    element.remove();
};

const itemListClickHandler = (event) => {
    if (event.target.classList.contains('autocomplete-list-item')) {
        document.querySelector('#country-input').value = event.target.dataset.value;
        removeListContainer();
    }
};

/**
 * Main handler of the autocomplete feature.
 * @param {HTMLElement} inputElm - Form's input element.
 * @see {@link https://www.w3schools.com/howto/howto_js_autocomplete.asp}.
 */
const autocomplete = (inputElm) => {
    let listContainer;
    // This will holds the parent node.
    const parent = inputElm.parentNode;
    //  This holds the value from the input.
    const { value } = inputElm;
    // This will check the DOM for existing listContainer.
    const hasListContainer = !!document.querySelector('.autocomplete-items-list');
    // If no value, empty list and return false.
    if (!value && hasListContainer) {
        removeListContainer();
        return false;
    }
    // If listContainer already exist, empty it.
    if (hasListContainer) {
        listContainer = document.querySelector('.autocomplete-items-list');
        // This removes any event handler attached to the list items.
        listContainer.removeEventListener('click', itemListClickHandler);
        emptyListContainer();
    } else {
        // Else if listContainer doesn't exist, create it.
        // This creates a container to hold the list of suggested items.
        listContainer = document.createElement('div');
        // This gives listContainer a class.
        listContainer.setAttribute('class', 'autocomplete-items-list');
        // This appends listContainer to the input's parent.
        parent.appendChild(listContainer);
    }
    // This generates items for the listContainer.
    generateAutocompleteItems(listContainer, countries, value);
    // This adds click event to listen on the list items.
    listContainer.addEventListener('click', itemListClickHandler);
};

export default autocomplete;
