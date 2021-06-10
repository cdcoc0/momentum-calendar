import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';

const DateContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    font-family: "Lucida Console", Helvetica, sans-serif;
    color: white;
    font-size: 1.25rem;;
    margin-top: 3rem;
`

const ClockContainer = styled.div`
    //background: black;
    //height: 120px;
    display: flex;
    flex-direction: row-reverse;
    font-family: sans-serif;
    font-size: 4rem;
    font-weight: bold;
    color: white;
    align-items: center;
    margin-bottom: 1.5rem;
`

const Clock = () => {
    const [time, setTime] = useState({
        date: new Date()
    });

    const getTime = () => {
        setTime({date: new Date()});
    };

    useEffect(() => {
        const oneMinCall = setInterval(() => getTime(), 30000);
        return () => clearInterval(oneMinCall);
    });

    const month = dayjs(time.date).format('MMM');
    const date = time.date.getDate();
    const d = time.date.getDay();
    const day = dayjs(time.date).format('ddd');
    
    console.log(d);
    const hours = time.date.getHours();
    const minutes = time.date.getMinutes();

    return (
        <div>
            <DateContainer>{`${month} ${date} (${day})`}</DateContainer>
            <ClockContainer>
                {`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}
            </ClockContainer>
        </div>
    )
}

export default Clock;