const fetch = require('node-fetch');
// /**
// * Helper function for getting data from geoname API
// * @param {String} val - The user's input
// * @return {Object} - response body from the API
// */
module.exports = async (val) => {
    console.log('running fetch!!!!');
    const options = 'maxRows=5&fuzzy=1&username=anes';
    const response = await fetch(`http://api.geonames.org/searchJSON?q=&name_startsWith=${val}&${options}`);
    const data = await response.json();
    try {
        return data;
    } catch (error) {
        return error;
    }
};

