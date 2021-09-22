const dateInputHandler = (event) => {
    // remove text error
    document.querySelector('.date-input-error').innerText = '';
    // Save the date value. as ['year', 'month', 'day']
    const date = event.target.value.split('-');
    // Add the departure date to the new(last) added trip.
    const updatedTrips = localStorage.getObjectItem('trips');
    const departure = {
        month: date[1],
        day: date[2],
        year: date[0],
    };
    updatedTrips[updatedTrips.length - 1].departure = departure;
    localStorage.setObjectItem('trips', updatedTrips);
};

export default dateInputHandler;
