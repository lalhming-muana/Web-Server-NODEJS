const geocode = require('./geocode')
const forecast = require('./forecast')
const request = require('request')

const address = process.argv[2];


if(!address){
    console.log('A khaw hming i dah lo');
}
else{
    geocode(address,(error, data)=>{
        if(error){
            return console.log(error);
        }
        
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(`\nKhaw hming: ${data.location}\n`);
            console.log(`Forecast:\n ${forecastData}`);
    
          })
    })
    

}


