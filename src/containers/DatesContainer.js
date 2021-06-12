import React from 'react';
import {connect} from 'react-redux';
import{onDateClick} from '../modules/dateInfo';
import Dates from '../calendar/Dates';

const DatesContainer = ({year, month, initDate, prevLast, thisLast, today, onDateClick, openModal, todos}) => {
    return (
        <Dates year={year} month={month} initDate={initDate} 
            prevLast={prevLast} thisLast={thisLast} today={today} onDateClick={onDateClick}
            openModal={openModal} todos={todos}  />
    );
};

const mapStateToProps = state => ({
    year: state.dateInfo.year,
    month: state.dateInfo.month,
    initDate: state.dateInfo.initDate,
    prevLast: state.dateInfo.prevLast,
    thisLast: state.dateInfo.thisLast,
    today: state.dateInfo.today,
    todos: state.todos.todos
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