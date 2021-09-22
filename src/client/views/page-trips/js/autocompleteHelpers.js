import pinIcon from '../../../img/pin.png';
import Trip from './trip_model';
import * as storageHelper from './manipulateStorage';
import fetchLocation from './fetchLocation';


const generateResultsItems = (parent, value) => {
    if (!parent || !value) return;
    // This initialize a document fragment that will serve as container
    const fragment = new DocumentFragment();
    fetchLocation(value).then((data) => {
        Object.values(data)[1].forEach((obj) => {
            // eslint-disable-next-line no-use-before-define
            emptyListContainer();
            const resultItem = document.createElement('div');
            if (obj.name.substr(0, value.length).toLowerCase() === value.toLowerCase()) {
                // If same initials, print the initials in bold + the rest of the string.
                resultItem.innerHTML = `<strong>${obj.name.substr(0, value.length)}</strong>${obj.name.substr(value.length)}, ${obj.countryName}`;
            } else {
                // Else, print the string.
                resultItem.innerHTML = `${obj.name.substr(0, value.length)}${obj.name.substr(value.length)}, ${obj.countryName}`;
            }
            // This sets a data attr that will hold the value of the item.
            // lattitude, longitude, city, country
            resultItem.setAttribute('data-longitude', `${obj.lng}`);
            resultItem.setAttribute('data-lattitude', `${obj.lat}`);
            resultItem.setAttribute('data-city', `${obj.name}`);
            resultItem.setAttribute('data-country', `${obj.countryName}`);
            resultItem.setAttribute('role', 'option');
            resultItem.setAttribute('class', 'result-item');

            const pin = document.createElement('img');
            pin.src = pinIcon;
            resultItem.appendChild(pin);

                fragment.appendChild(resultItem);
            });
            parent.appendChild(fragment);
        });
};

/*
** This Clears the list of suggestions.
*/
const emptyListContainer = () => {
    const element = document.querySelector('.results');
    if (!element) return;
    element.childNodes.forEach((child) => {
        element.removeChild(child);
    });
};

/*
** This remove the suggestions' list from the DOM.
*/
const removeListContainer = () => {
    let element;
    if (document.querySelector('.results')) {
        element = document.querySelector('.results');
        element.remove();
    }
};

/*
** This creates a trip instance and saves it to local storage
** when clicking on a item from the suggestions list.
*/
const resultItemOnClick = (event) => {
    if (event.target.classList.contains('result-item')) {
        document.querySelector('#country-input').value = event.target.innerText;
        let element = event.target;
        let currentClick = new Date();
        let createdAt = currentClick.toGMTString();
        let newTrip = new Trip(
            element.dataset.city,
            element.dataset.country,
            element.dataset.longitude,
            element.dataset.lattitude,
            createdAt,
        );

        //Save trip data to local storage.
        // localStorage.setObjectItem('trips', [...newTrip])
        storageHelper.addTripToStorage(newTrip);
        console.log('done')
        removeListContainer();
    }
};

export {
    generateResultsItems,
    resultItemOnClick,
    emptyListContainer,
    removeListContainer,
};
