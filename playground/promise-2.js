const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request(
            {
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
                json: true
            },
            (error, reponse, body) => {
                if (error) {            
                    reject('Enable to connect to Google API');
                } else if (body.status === 'ZERO_RESULTS') {
                    reject('Unable to find that address');
                } else if (body.status === 'OVER_QUERY_LIMIT') {
                    reject('OVER_QUERY_LIMIT');
                } else if (body.status === 'OK') {
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });
                }
            }
        );
    });
};

geocodeAddress('0000000').then((location) => {
    console.log(JSON.stringify(location, undefined, 4));
}, (errorMessage) => {
    console.log(errorMessage);
});