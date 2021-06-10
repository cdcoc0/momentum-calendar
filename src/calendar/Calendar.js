import React, {useState} from 'react';
//import {TodayProvider} from '../contexts/today';
import Background from './Background';
import MonthContainer from '../containers/MonthContainer';
import DatesContainer from '../containers/DatesContainer';
import ModalContainer from '../containers/ModalContainer';
import {MdNavigateBefore} from 'react-icons/md';
import './styles/Calendar.scss';

const Calendar = () => {
    const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [modalCtrl, setModalCtrl] = useState(false);

    const openModal = () => {
        setModalCtrl(true);
    };

    const closeModal = () => {
        setModalCtrl(false);
    };

    return (
        <div className="Calendar">
            <Background />
            <MonthContainer />
            <div className="navSpace">
                <div className="nav">
                    {/* <MdNavigateBefore /> */}
                </div>
                <div className="body">
                    <div className="daysArray">
                        {daysArray.map(d => <div key={d} className="days">{d}</div>)}
                    </div>
                    <DatesContainer openModal={openModal} />
                </div>
            </div>
            <ModalContainer open={modalCtrl} close={closeModal} />
        </div>
    );
}

export default Calendar;