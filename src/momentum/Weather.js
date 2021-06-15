import React, {useCallback, useEffect, useState} from 'react';
import './styles/Weather.scss';

const Weather = () => {
    const [weather, setWeather] = useState({
        place: 'Seoul, Korea',
        temperature: 0,
        description: 'Clear'
    });

    const getWeather = useCallback((lat, lon) => {
        const API_KEY = "bae1076bc4c9ce19a1bd0aa7f04a7d96";
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(response => {
            return response.json();
        }).then(json => {
            const result = {
                place: json.name,
                temperature: Math.floor(json.main.temp),
                description: json.weather[0].main
            };
            setWeather({
                place: result.place,
                temperature: result.temperature,
                description: result.description
            });
        });
    }, []);
    
    const geoSuccess = useCallback(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude,
            longitude
        };
        getWeather(latitude, longitude);
    }, [getWeather]);
    
    const geoErr = useCallback(() => {
        console.log("geolocation error");
    }, []);
    
    const getCoords = useCallback(() => {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoErr);
    }, [geoErr, geoSuccess]);  
    
    useEffect(() => {
        getCoords();
    },[]);

    return (
        <div className="Weather">
            <div className="location">{`@ ${weather.place}`}</div>
            <div className="desc">{`${weather.temperature}°C ${weather.description}`}</div>
        </div>
    );
};

export default Weather;