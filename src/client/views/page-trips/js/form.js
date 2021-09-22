import countryInputHandler from './countryInputHandler';
import dateInputHandler from './dateInputHandler';
import saveTrip from './formSubmitHandler';
import toggleOverlay from './toggleOverlay';

// This creates the form component.
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
    inputContainer.addEventListener('input', (e) => {
        countryInputHandler(e);
    });

    // This creates an input for the destination.
    const countryInput = document.createElement('input');
    Object.assign(countryInput,
        {
            className: 'user-input',
            id: 'country-input',
            type: 'text',
            name: 'country',
            placeholder: 'Choose your destination...',
        });
    // error message
    const countryError = document.createElement('h1');
    countryError.setAttribute('class', 'country-input-error error');

    // This creates a date picker.
    const dateContainer = document.createElement('div');
    const datePicker = document.createElement('input');
    datePicker.addEventListener('input', dateInputHandler);
    Object.assign(datePicker,
        {
            type: 'date',
            className: 'user-input',
            id: 'date',
        });

    //datepicker error message
    const dateError = document.createElement('h1');
    dateError.setAttribute('class', 'date-input-error error');
    dateContainer.appendChild(dateError);
    dateContainer.appendChild(datePicker);


    // This creates the submit button.
    const button = document.createElement('button');
    button.setAttribute('class', 'submit-btn');
    button.classList.add('form__submit');
    button.innerText = 'Save';
    button.addEventListener('click', saveTrip);

    inputContainer.appendChild(countryError);
    inputContainer.appendChild(countryInput);

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('class', 'close-btn');
    closeBtn.innerText = 'X';
    closeBtn.addEventListener('click', () => {
        toggleOverlay();
        document.body.removeChild(document.querySelector('.form-wrapper'));
    });

    const formHeader = document.createElement('h1');
    formHeader.innerText = 'Create your next trip'
    form.appendChild(formHeader);
    form.appendChild(inputContainer);
    form.appendChild(dateContainer);
    form.appendChild(button);
    form.appendChild(closeBtn);
    section.appendChild(form);

    return section;
};

export default formWrapper;
