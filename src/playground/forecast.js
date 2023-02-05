
const request = require('request')
require('dotenv').config({path: require('find-config')('.env')})

const weatherstack_key = process.env.WEATHERSTACK_API_KEY

const forecast=(latitude, longitude, callback)=>{

    const url='http://api.weatherstack.com/current?access_key='+weatherstack_key+'&query='+latitude+','+longitude+'&units=f'

    request({url: url, json:true}, (error,response)=>{
        
        if(error){
            callback(' Cannot connect to weatherstack. Please check your internet connection.', undefined);
        }
        else if(response.body.error){
            callback(' Cannot find location. Please enter a valid location', undefined)
        }
        else{
            callback(undefined,`Temperature: ${response.body.current.temperature} degrees \nWeather: ${response.body.current.weather_descriptions[0]}`)
        }

    })


}



 module.exports = forecast