import React from 'react';
import {connect} from 'react-redux';
import Month from '../calendar/Month';
import { increaseMonth, decreaseMonth } from '../modules/dateInfo';

const MonthContainer = ({year, month, increaseMonth, decreaseMonth}) => {
    return (
        <Month year={year} month={month} onIncrease={increaseMonth} onDecrease={decreaseMonth} />
    );
};

export default connect(
    state => ({
        year: state.dateInfo.year,
        month: state.dateInfo.month
    }),
    {
        increaseMonth,
        decreaseMonth
    }
)(MonthContainer);