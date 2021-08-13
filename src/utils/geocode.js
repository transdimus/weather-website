const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHJhbnNkaW0iLCJhIjoiY2tycW9hODQxMDN0bDJwcXk1ajdrc2k1NCJ9.gfSO7gv0C0TnoTq6nQPmGQ&limit=1'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unbale to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('No location identified for given search!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode