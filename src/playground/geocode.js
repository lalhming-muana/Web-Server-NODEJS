const request = require('request');
require('dotenv').config({ path: require('find-config')('.env') })

const mapbox_key = process.env.MAPBOX_API_KEY


const geourl= `https://api.mapbox.com/geocoding/v5/mapbox.places/aizawl.json?access_token=pk.eyJ1IjoibGFsaG1pbmciLCJhIjoiY2xjdnI4Y3hsMWo2djN2cDA5ZDZnOGg5ciJ9.4n-VpDJjLNEuqrjV31Zdmg`

    request({url: geourl, json: true}, (error, response)=>{
       if(error){
        console.log('Unable to connect to mapbox. Please check your internet connection');
       } 
       else if(response.body.features.length === 0){
        console.log('Unable to find location. Please provide a valid location');
       }
       else{
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0]; 
       console.log('Latitude: ',latitude,' Longitude:',longitude);}

    })
    