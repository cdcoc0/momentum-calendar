import React from 'react';
import Clock from './Clock';
import Weather from './Weather';
import styled from 'styled-components';

const ClockWeather = styled.div`
    //background: pink;
`

const ClockWeatherTemplate = () =>{
    return (
        <ClockWeather>
            <Clock />
            <Weather />
        </ClockWeather>
    );
}

export default ClockWeatherTemplate;