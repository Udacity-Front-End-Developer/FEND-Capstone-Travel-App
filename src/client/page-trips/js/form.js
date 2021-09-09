import countryInputHandler from '../../js/countryInputHandler';
import saveTrip from '../../js/formSubmitHandler';

const formWrapper = () => {
    // This creates a container for the form.
    const section = document.createElement('section');
    section.classList.add('form-wrapper', 'container');

    // This creates the form element.
    const form = document.createElement('form');
    form.setAttribute('action', '');
    form.setAttribute('autocomplete', 'off');
    form.classList.add('form');

    // This will act as a container for the destination input + results list.
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    inputContainer.addEventListener('input', countryInputHandler);

    // This creates an input for the destination.
    const countryInput = document.createElement('input');
    Object.assign(countryInput,
        {
            className: 'user-input',
            id: 'country-input',
            type: 'text',
            name: 'country',
            placeholder: 'Country...',
        });

    // This creates a date picker.
    const dateContainer = document.createElement('div');
    const datePicker = document.createElement('input');
    Object.assign(datePicker,
        {
            type: 'date',
            className: 'user-input',
            id: 'date',
        });
    dateContainer.appendChild(datePicker);

    // This creates the submit button.
    const button = document.createElement('button');
    button.classList.add('form__submit');
    button.innerText = 'Save';
    button.addEventListener('click', saveTrip);

    inputContainer.appendChild(countryInput);
    form.appendChild(inputContainer);
    form.appendChild(dateContainer);
    form.appendChild(button);
    section.appendChild(form);

    return section;
};

export default formWrapper;
