import React from 'react';
import {connect} from 'react-redux';
import{onDateClick} from '../modules/dateInfo';
import Dates from '../calendar/Dates';

const DatesContainer = ({year, month, initDate, prevLast, thisLast, today, onDateClick, openModal, userObj}) => {
    return (
        <Dates year={year} month={month} initDate={initDate} 
            prevLast={prevLast} thisLast={thisLast} today={today} onDateClick={onDateClick}
            openModal={openModal} userObj={userObj} />
    );
};

export default connect(
    state => ({
        year: state.dateInfo.year,
        month: state.dateInfo.month,
        initDate: state.dateInfo.initDate,
        prevLast: state.dateInfo.prevLast,
        thisLast: state.dateInfo.thisLast,
        today: state.dateInfo.today,
    }),
    {
        onDateClick
    }
)(DatesContainer);