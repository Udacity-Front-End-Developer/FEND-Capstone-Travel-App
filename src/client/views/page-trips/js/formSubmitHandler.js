const saveTrip = (e) => {
    e.preventDefault();
    if (!document.querySelector('#country-input').value) {
        document.querySelector('.country-input-error').innerText = 'This field is required';
    } else if (document.querySelector('#date').value.length < 1) {
        document.querySelector('.date-input-error').innerText = 'Please pick a date';
    } else {
        window.location.reload();
    }
};

export default saveTrip;
