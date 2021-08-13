const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7a79147c893087b0b8a4b39caf273a9e&query=' + longitude + ',' + latitude +'&units=f'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degree out and humidity is ' + body.current.humidity + '%')
        }
    })
}

module.exports = forecast