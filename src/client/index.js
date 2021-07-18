import './styles/base.scss';
import './styles/form.scss';
import autocomplete from './js/autocomplete';

// Input typing event.
document.querySelector('#country-input').addEventListener('input', (event) => {
    autocomplete(event.target);
});

// // Updates value with selected country from the suggestion list.
// document.querySelector('.autocomplete-list-item').addEventListener()
if (module.hot) {
    module.hot.accept();
}
