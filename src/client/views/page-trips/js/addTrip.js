import toggleOverlay from './toggleOverlay';
import formWrapper from './form';

/*
**
*/
const addTrip = () => {
    toggleOverlay();
    const form = formWrapper();
    document.querySelector('body').appendChild(form);
};

export default addTrip;
