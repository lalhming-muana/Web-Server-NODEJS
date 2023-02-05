const request = require('request')
require('dotenv').config({path: require('find-config')('.env')})

const weatherstack_key = process.env.WEATHERSTACK_API_KEY

const forecast=(latitude, longitude, callback)=>{

    const url='http://api.weatherstack.com/current?access_key='+weatherstack_key+'&query='+latitude+','+longitude+'&units=f'

    request({url: url, json:true}, (error,response)=>{
        console.log(undefined,' the response is:',response.body.current)

    })


}

forecast(23.6249, 92.7245, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

 module.exports = forecast