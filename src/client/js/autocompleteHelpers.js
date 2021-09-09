import pinIcon from '../img/pin.png';
import Trip from './trip_model';
import * as storageHelper from './manipulateStorage';

// fetch data related to the keyword typed by the user.
export const autocompleteResultFetcher = async (val) => {
    const response = await fetch('/api/coordination', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ val }),
    });
    const data = await response.json();
    try {
        return data;
    } catch (error) {
        return error;
    }
};

const generateResultsItems = (parent, value) => {
    if (!parent || !value) return;
    // This initialize a document fragment that will serve as container
    const fragment = new DocumentFragment();
    // The API call
    // FIXME: Exposed username
    // const options = 'maxrows=5&fuzzy=1&username=anes';
    // fetch(`http://api.geonames.org/searchjson?q=&name_startswith=${value}&${options}`)
    autocompleteResultFetcher(value).then((data) => {
            console.log('data',data);
        Object.values(data)[1].forEach((obj) => {
            // eslint-disable-next-line no-use-before-define
            emptyListContainer();
            const resultItem = document.createElement('div');
            // TODO: for fuzzy search, add a fucntion that bolds the first coresponding letter.
            // eg: input = 'ben aous' output='<strong>ben a</strong>+ous'
            // This checks if country starts with same letters as the value.
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

const emptyListContainer = () => {
    const element = document.querySelector('.results');
    if (!element) return;
    element.childNodes.forEach((child) => {
        element.removeChild(child);
    });
};

const removeListContainer = () => {
    let element;
    if (document.querySelector('.results')) {
        element = document.querySelector('.results');
        element.remove();
    }
};

const resultItemOnClick = (event) => {
    if (event.target.classList.contains('result-item')) {
        console.log('clicked', event.target.innerText);
        document.querySelector('#country-input').value = event.target.innerText;
        // document.querySelector('#country-input').value = event.target.dataset.value;
        let element = event.target;
        let currentClick = new Date();
        let createdAt = {
            month: String(currentClick.getMonth() + 1).padStart(2, '0'),
            day: String(currentClick.getDate()).padStart(2, '0'),
            year: String(currentClick.getFullYear()),
        };
        let newTrip = new Trip(
            element.dataset.city,
            element.dataset.country,
            element.dataset.longitude,
            element.dataset.lattitude,
            createdAt,
        )
        //TODO: save trip data to lcoal storage.
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
