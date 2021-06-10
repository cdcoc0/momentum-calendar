import React from 'react';
import {connect} from 'react-redux';
import{onDateClick} from '../modules/dateInfo';
import Dates from '../calendar/Dates';

const DatesContainer = ({year, month, initDate, prevLast, thisLast, today, onDateClick, openModal}) => {
    return (
        <Dates year={year} month={month} initDate={initDate} 
            prevLast={prevLast} thisLast={thisLast} today={today} onDateClick={onDateClick}
            openModal={openModal}  />
    );
};

const mapStateToProps = state => ({
    year: state.year,
    month: state.month,
    initDate: state.initDate,
    prevLast: state.prevLast,
    thisLast: state.thisLast,
    today: state.today
});

const mapDispatchToProps = dispatch => ({
    onDateClick: p => {
        dispatch(onDateClick(p))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DatesContainer);