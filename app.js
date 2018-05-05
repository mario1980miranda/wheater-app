const request = require('request');
const yargs = require('yargs');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var informedAddress = argv.address;
var encodedAddress = encodeURIComponent(informedAddress);

request(
    {
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
        json: true
    },
    (error, reponse, body) => {
        if (error) {            
            console.log('Enable to connect to Google API');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find that address');
        } else if (body.status === 'OVER_QUERY_LIMIT') {
            console.log('OVER_QUERY_LIMIT');
        } else if (body.status === 'OK') {
            //console.log(JSON.stringify(body, undefined, 4));
            //console.log(`Latitude: ${body.results[0]}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
    }
);