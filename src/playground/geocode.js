const request = require('request')
require('dotenv').config({path: require('find-config')('.env')})

const mapbox_key = process.env.MAPBOX_API_KEY

const geocode =(address, callback)=>{

    const mapbox_url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapbox_key}`

    request({url: mapbox_url, json:true}, (error, response)=>{

        if(error){
            callback('Unable to connect to mapbox. Please check your internet connection!', undefined);
        }
        else if(response.body.features.length === 0){
            callback('Unknown location. Please enter a valid location', undefined);
        }
        else{
        
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    })

}


module.exports = geocode