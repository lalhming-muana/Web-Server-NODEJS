const request = require('request')
require('dotenv').config({ path:  require('find-config')('.env') })

const weatherstack_key = process.env.WEATHERSTACK_API_KEY

const forecast = (latitude, longitude, callback) => {
    const url='http://api.weatherstack.com/current?access_key='+weatherstack_key+'&query='+latitude+','+longitude+'&units=m'

    request({ url, json: true }, (error,response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,`\nTemperature: ${response.body.current.temperature} degrees \nWeather: ${response.body.current.weather_descriptions[0]}`)
        }
    })
}

module.exports = forecast