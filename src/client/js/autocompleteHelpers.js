const generateAutocompleteItems = (parent, list, value) => {
    const fragment = new DocumentFragment();
    list.forEach((entry) => {
        // This checks starts with same letters as value.
        if (entry.substr(0, value.length).toLowerCase() === value.toLowerCase()) {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
            <strong>
            ${entry.substr(0, value.length)}
            </strong>
            ${entry.substr(value.length)}
            `;
            // This sets a data attr that will hold the value of the item.
            listItem.setAttribute('data-value', entry);
            // This gives the item a class.
            listItem.setAttribute('class', 'autocomplete-list-item');
            fragment.appendChild(listItem);
        }
        parent.appendChild(fragment);
    });
};

export {
    generateAutocompleteItems,
};
