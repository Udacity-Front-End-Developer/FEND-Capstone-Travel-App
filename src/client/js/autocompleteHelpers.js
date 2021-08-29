import pinIcon from '../img/pin.png';

const generateResultsItems = (parent, value) => {
    if (!parent || !value) return;
    // This initialize a document fragment that will serve as container
    const fragment = new DocumentFragment();
    // The API call
    // FIXME: Exposed username
    const options = 'maxRows=5&fuzzy=1&username=anes';
    fetch(`http://api.geonames.org/searchJSON?q=&name_startsWith=${value}&${options}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
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
                // Use split(',')[0] to get city's name.
                resultItem.setAttribute('data-value', `${obj.name}, ${obj.countryName}`);
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
        document.querySelector('#country-input').value = event.target.dataset.value;
        removeListContainer();
    }
};

export {
    generateResultsItems,
    resultItemOnClick,
    emptyListContainer,
    removeListContainer,
};
