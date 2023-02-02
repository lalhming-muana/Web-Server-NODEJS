const request = require('request');
require('dotenv').config({ path: require('find-config')('.env') })

const mapbox_key = process.env.MAPBOX_API_KEY


const geocode_url=`https://api.mapbox.com/geocoding/v5/mapbox.places/aizawl.json?access_token=${mapbox_key}`

request({url: geocode_url , json: true}, (error, response)=>{
    console.log('Longitude',response.body.features[0].center[0])
    console.log('Latitude',response.body.features[0].center[1])
    console.log('Checking for the response... ',response.body.features.length);

} )