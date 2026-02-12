const asyncHandler = require('express-async-handler')

const buildRequestUrl = (location_request, req_type) => {
    return `http://api.weatherapi.com/v1/${req_type}?key=${process.env.WEATHER_API_KEY}&q=${location_request}&days=${5}`;
}

const requestWeather = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData
}

const getWeather = asyncHandler( async(req, res) => {
    const requestLocation = req.query.q
    if(!requestLocation){
    const weatherData = await requestWeather(buildRequestUrl(`auto:ip`,`forecast.json`))
    return res.json(weatherData)
    }

    const locatoinWeatherData = await requestWeather(buildRequestUrl(requestLocation, `forecast.json`))
    return res.json(locatoinWeatherData)
})

const autoFillLocations = asyncHandler( async(req, res) => {
    const requestLocation = req.query.q
    const foundLocations = await requestWeather(buildRequestUrl(requestLocation, `search.json`))
    return res.json(foundLocations)
})

module.exports = {
    autoFillLocations,
    getWeather
}