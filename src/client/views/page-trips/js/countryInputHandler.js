// This an attempt to limit the number of request send to the api
import autocomplete from './autocomplete';

const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
};

const countryInputHandler = debounce((event) => {
  autocomplete(event.target);
}, 0);

export default countryInputHandler;
