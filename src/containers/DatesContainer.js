import React from 'react';
import {connect} from 'react-redux';
import{onDateClick} from '../modules/dateInfo';
import Dates from '../calendar/Dates';
import { getTodo } from '../modules/todos';

const DatesContainer = ({year, month, initDate, prevLast, thisLast, today, onDateClick, openModal, getTodo, todos}) => {
    return (
        <Dates year={year} month={month} initDate={initDate} 
            prevLast={prevLast} thisLast={thisLast} today={today} onDateClick={onDateClick}
            openModal={openModal} getTodo={getTodo} todos={todos}  />
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
    },
    getTodo: (year, month) => {
        dispatch(getTodo(year, month));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DatesContainer);