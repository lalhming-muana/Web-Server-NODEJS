const { hasSubscribers } = require('diagnostics_channel');
const express = require('express')
const path = require('path')
const hbs = require('hbs');
const { query } = require('express');
const geocode = require('./geocode')
const forecast = require('./forecast')

const app = express()



// Define the paths for configuring express.js
const viewsDirectory=path.join(__dirname,'../templates/views')
const publicDirectoryPath= path.join(__dirname,'../public');
const partialsPath= path.join(__dirname,'../templates/partials');



// Setup the handlebars engine and the views directory
app.set('view engine', 'hbs'); // sets which view engine we are going to use
app.set('views',viewsDirectory); // Customize the views directory by changing the name to templates
hbs.registerPartials(partialsPath);


// app.use is a way to customize the server
// Setup the static directory for serving static pages
app.use(express.static(publicDirectoryPath))


// in app.get('') the url is empty for the homepage

app.get('', (req, res)=>{
    res.render('index',{
         title: 'Weather app',
         name: 'Howard'
    });
})

app.get('/about',(req, res)=>{
    res.render('about',{
        title: "About me",
        name: 'Howard'
    })
})


app.get('/help',(req, res)=>{
    res.render('help',{
        title: "Help",
        name: 'Howard',
        age: 7
    });

})

app.get('/weather',(req, res)=>{

    if(!req.query.address){
        return res.send({
            error: 'No address provided. Please provide the required address'
        })

    }
    
    geocode(req.query.address, (error, {latitude, longitude, location}={})=>{
        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData)=>{

            if(error){
                return res.send({error})
            }


            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })


        })

    })

    // res.send({
    //     forecast: "It is sunny",
    //     location: req.query.address,
    //     name: 'Howard'
    // });

})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404:',
        name: "Howard",
        errorMessage: ' Help data Page not found'
    })
})


app.get('/products',(req, res)=>{
    
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query)
    res.send({
        products: []
    })

})


app.get('*',(req, res)=>{
    res.render('404',{
        title:'404:',
        name: "Howard",
        errorMessage: ' Page not found'
    })
})




// The code below runs the server and will run it unless you shut it down manually

app.listen(3000, ()=>{
    console.log('The server is starting on port no: 3000');
})