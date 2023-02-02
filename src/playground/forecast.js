const request = require('request')

require('dotenv').config({path: require('find-config')('.env')})
const weatherstack_key = process.env.WEATHERSTACK_API_KEY


const forecast_url =`http://api.weatherstack.com/current?access_key=${weatherstack_key}&query=23.6249,92.7245&units=f`


request({url: forecast_url, json: true}, (error , response) =>{

    if(error){
        console.log('unable to connect to weather services'); // Internet connection down
    }
    else if(response.body.error){
        console.log('Coordintates missing!! Please provide proper coordinates.');
    }


    else{
    const weather = response.body.current.weather_descriptions[0];
    const temperature = response.body.current.temperature;
    console.log('Temperature: ',temperature,'C   Weather: ',weather);}


})