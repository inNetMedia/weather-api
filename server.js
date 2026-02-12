require('dotenv').config();
const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3500;



const buildRequestUrl = (location_request, req_type) => {
    return `http://api.weatherapi.com/v1/${req_type}?key=${process.env.WEATHER_API_KEY}&q=${location_request}&days=${5}`;
}

const requestWeather = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData
}

app.get('/', async (req, res) => {
    const requestLocation = req.query.q

    try{
        if(!requestLocation){
        const weatherData = await requestWeather(buildRequestUrl(`auto:ip`,`forecast.json`))
        return res.json(weatherData)
        }

        const locatoinWeatherData = await requestWeather(buildRequestUrl(requestLocation, `forecast.json`))
        return res.json(locatoinWeatherData)
    }catch(err){
        console.log(err)
        res.status(500).json(err.message)
    }
    
})

app.get('/search', async (req, res) => {
    const requestLocation = req.query.q
    try{
        const foundLocations = await requestWeather(buildRequestUrl(requestLocation, `search.json`))
        return res.json(foundLocations)

    }catch(err){
        res.status(500).json(err.message)
    }
})



app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))