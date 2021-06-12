import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import './styles/Clock.scss'

const Clock = ({month, date}) => {
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

    const formMonth = dayjs(`${month + 1}`).format('MMM');
    const formDate = date;
    const day = dayjs(time.date).format('ddd');
    
    const hours = time.date.getHours();
    const minutes = time.date.getMinutes();

    return (
        <div className="Clock">
            <div className="momentum-datecontainer">{`${formMonth} ${formDate} (${day})`}</div>
            <div className="momentum-clockcontainer">
                {`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}
            </div>
        </div>
    )
}

export default Clock;