class Trip {
    constructor(city, country, date, imageUrl) {
        this.city = city;
        this.country = country;
        this.date = date;
        this.imageUrl = imageUrl;
    }

    remove() {
        // old arrayOfTrips.
        const arrayOfTrips = localStorage.getObjectItem('trips');
        // remove the obj from the array.
        arrayOfTrips.forEach((trip) => {
            if (trip.city === this.city) {
                arrayOfTrips.splice(i, 1);
                break;
            }
        });
        // update localStorage with the new arrayOfTrips.
        localStorage.setObjectItem('trips', arrayOfTrips);
    }
}
