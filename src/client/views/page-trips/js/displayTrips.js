import retrieveTrips from './retrieveTrips';
import createTripComponent from './createTripComponent';
import createSlideshowComponent from './createSlideshowComponent';

/**
* The main function to display the trips stored in local storage.
*/
const displayTrips = () => {
    // This is the wrapper that holds everything inside.
    const container = document.querySelector('.trips_container');
    container.classList.add('active');
    container.innerHTML = ' ';

    // Cards components.
    const cardsContainer = document.createElement('div');
    cardsContainer.setAttribute('class', 'cards');

    // retrieve the trips array from storage.
    const tripsArr = retrieveTrips();

    // Create a trip component and slideshow for each entry of `trips`.
    tripsArr.forEach((trip, i) => {
        const slideShowComponent = createSlideshowComponent(trip, i);
        cardsContainer.appendChild(slideShowComponent);

        const tripContainer = createTripComponent(trip);
        container.appendChild(tripContainer);
    }); // end of forEach;

    // Slideshow handler.
    let tripIndex = 0;
    let previews;
    const showTrip = (index) => {
        const trips = document.querySelectorAll('.trip-container');
        if (index > trips.length - 1) tripIndex = 0;
        if (index < 0) tripIndex = trips.length - 1;
        setTimeout(() => {
            if (document.querySelectorAll('.card-preveiw').length > 1) return;
            previews = document.querySelectorAll('.card-preview');
            previews.forEach((preview) => {
                preview.classList.remove('active');
            });
            // toggle the currently active preview.
            if (previews[tripIndex]) previews[tripIndex].classList.add('active');
        }, 1000);

        // hides all trips.
        trips.forEach((trip) => {
            trip.style.display = 'none';
        });
        // show the active trip only.
        trips[tripIndex].style.display = 'block';
    };
    // Move to next/previous trip.
    showTrip(tripIndex);
    const moveTrip = (n) => {
        showTrip(tripIndex += n);
    };
    // Select desired trip.
    const activePreview = (n) => {
        showTrip(tripIndex = n);
    };

    // Trips navigation button
    const nextTripButton = document.createElement('button');
    nextTripButton.setAttribute('class', 'next-trip-btn btn');
    nextTripButton.innerHTML = '&#10095;';
    const prevTripButton = document.createElement('button');
    prevTripButton.setAttribute('class', 'next-trip-btn btn');
    prevTripButton.innerHTML = '&#10094;';

    // slideshow handler.
    nextTripButton.addEventListener('click', () => {
        moveTrip(1);
    });
    prevTripButton.addEventListener('click', () => {
        moveTrip(-1);
    });

    cardsContainer.addEventListener('click', (e) => {
        if (e.target.nodeName === 'IMG') {
            activePreview(parseInt(e.target.dataset.previewindex));
        }
    });

    const tripsNavigation = document.createElement('div');
    tripsNavigation.setAttribute('class', 'trips-navigation');
    tripsNavigation.appendChild(prevTripButton);
    tripsNavigation.appendChild(nextTripButton);

    container.appendChild(tripsNavigation);

    container.appendChild(cardsContainer);
};

export default displayTrips;
