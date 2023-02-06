
const request = require('request')
require('dotenv').config({path: require('find-config')('.env')})

const weatherstack_key = process.env.WEATHERSTACK_API_KEY

const forecast=(latitude, longitude, callback)=>{

    const url='http://api.weatherstack.com/current?access_key='+weatherstack_key+'&query='+latitude+','+longitude+'&units=m'

    request({url: url, json:true}, (error,response)=>{
        
        if(error){
            callback(' Server a connect theilo. I internet connection check rawh.', undefined);
        }
        else if(response.body.error){
            callback(' A Khaw hming i dah hi a diklo. A spelling enchiang leh rawh.', undefined)
        }
        else{
            callback(undefined,`\nTemperature: ${response.body.current.temperature} degrees \nWeather: ${response.body.current.weather_descriptions[0]}`)
        }

    })


}



 module.exports = forecast