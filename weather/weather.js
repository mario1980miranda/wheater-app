const request = require('request');

var getWeather = (lat, lng, callback) => {
    request(
        {
            url: `https://api.darksky.net/forecast/2dd8256e1a62212cebf3a9bbef0af191/${lat},${lng}`,
            json: true
        },
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                callback(undefined, {
                    temperature: body.currently.temperature,
                    sensacao_termica: body.currently.apparentTemperature
                });
            } else {
                callback('Unable to fetch weather.', undefined);
            }
        }
    );
};

module.exports.getWeather = getWeather;