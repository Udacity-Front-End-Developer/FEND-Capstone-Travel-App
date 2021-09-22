import fetchImageData from './fetchImageData';
import fetchWeather from './fetchWeatherData';
import addTrip from './addTrip';

// Returns date in the forms of `month day year`
const getDepartureDate = (trip) => {
    const months = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'Aug',
        '09': 'Sept',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
    };
    const date = `${months[trip.departure.month]} ${trip.departure.day} ${trip.departure.year}`;
    return date;
};

// Countdown
const daysCountdown = ({ departure }) => {
    const today = new Date().getTime();
    const departureDate = new Date(`${departure.month} ${departure.day}, ${departure.year}`).getTime();
    const interval = departureDate - today;
    // days ---> days, hours, minutes, seconds
    const days = Math.floor(interval / (24 * 60 * 60 * 1000));
    return days;
};

/*
** Creates a trip component that displays info about trip.
*/
const createTripComponent = (trip) => {
    const daysCount = daysCountdown(trip);

    // Parent container.
    const tripContainer = document.createElement('div');
    tripContainer.setAttribute('class', 'trip-container');

    // Coutry title.
    const countryText = document.createElement('h1');
    countryText.setAttribute('class', 'country-text text');

    // City title.
    const cityText = document.createElement('h1');
    cityText.setAttribute('class', 'city-text text');

    // Departure date.
    const departureDate = document.createElement('h1');
    departureDate.setAttribute('class', 'departure-text text');

    // Countdown date.
    const countDown = document.createElement('h1');
    countDown.setAttribute('class', 'countDown-text text');

    // Weather container.
    const weatherContainer = document.createElement('div');
    weatherContainer.setAttribute('class', 'weather-container');
    const temp = document.createElement('h1');
    temp.setAttribute('class', 'temp');
    const weatherDesc = document.createElement('h1');
    weatherDesc.setAttribute('class', 'weather-desc');

    // Get a background image.
    fetchImageData(trip).then((result) => {
        if (result.hits[0]) {
        tripContainer.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${result.hits[0].largeImageURL})`;
        // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        }
    });

    // Get weather.
    fetchWeather(trip, daysCount).then((res) => {
        temp.innerText = `${res.data[0].temp}° Celcius`;
        weatherDesc.innerText = `${res.data[0].weather.description}`;
        weatherContainer.appendChild(temp);
        weatherContainer.appendChild(weatherDesc);
    });

    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('class', 'info');

    const destination = document.createElement('div');
    destination.setAttribute('class', 'info__destination-container');

    const date = document.createElement('div');
    date.setAttribute('class', 'info__date-container')

    countryText.innerText = `${trip.country}`;
    cityText.innerText = `${trip.city}`;
    departureDate.innerText = `Departing on ${getDepartureDate(trip)}`;
    countDown.innerText = `Due in ${daysCount} days`;

    destination.appendChild(cityText);
    destination.appendChild(countryText);

    date.appendChild(departureDate);
    date.appendChild(countDown);

    infoContainer.appendChild(destination);
    infoContainer.appendChild(date);

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    wrapper.appendChild(infoContainer);
    wrapper.appendChild(weatherContainer);

    const newTrip = document.createElement('button');
    newTrip.innerText = '+Add Trip';
    newTrip.classList.add('btn-pill', 'new-trip-btn');
    newTrip.addEventListener('click', addTrip)
    wrapper.appendChild(newTrip);

    tripContainer.appendChild(wrapper);

    return tripContainer;
};

export default createTripComponent;
