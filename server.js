require('dotenv').config();
const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3500;



const buildRequestUrl = (location_request) => {
    return `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location_request}&days=${5}`;
}

const requestWeather = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData
}

app.get('/', async (req, res) => {
    const weatherData = await requestWeather(buildRequestUrl('London'))
    res.json(weatherData)
})



app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))