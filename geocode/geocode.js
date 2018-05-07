const request = require('request');

var geocodeAddress = (informedAddress, callback) => {
    var encodedAddress = encodeURIComponent(informedAddress);
    request(
        {
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        },
        (error, reponse, body) => {
            if (error) {            
                callback('Enable to connect to Google API');
            } else if (body.status === 'ZERO_RESULTS') {
                callback('Unable to find that address');
            } else if (body.status === 'OVER_QUERY_LIMIT') {
                callback('OVER_QUERY_LIMIT');
            } else if (body.status === 'OK') {
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        }
    );
};

module.exports = {
    geocodeAddress
};