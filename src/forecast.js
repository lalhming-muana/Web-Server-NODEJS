const request = require('request')

require('dotenv').config()
const weatherstack_key = process.env.WEATHERSTACK_API_KEY

const forecast = (address, callback) => {
    const url =`http://api.weatherstack.com/current?access_key=${weatherstack_key}&query=23.6249,92.7245&units=f`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast

