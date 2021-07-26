import './styles/base.scss';
import './styles/form.scss';
import autocomplete from './js/autocomplete';

// Debouce function
function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
const debouncedAutocomplete = debounce((event) => autocomplete(event.target), 300);

document.querySelector('#country-input').addEventListener('input', (e) => debouncedAutocomplete(e));

// // Updates value with selected country from the suggestion list.
// document.querySelector('.autocomplete-list-item').addEventListener()
if (module.hot) {
    module.hot.accept();
}
