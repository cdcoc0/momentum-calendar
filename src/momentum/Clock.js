import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import './styles/Clock.scss'

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
        <div className="Clock">
            <div className="momentum-datecontainer">{`${month} ${date} (${day})`}</div>
            <div className="momentum-clockcontainer">
                {`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}
            </div>
        </div>
    )
}

export default Clock;