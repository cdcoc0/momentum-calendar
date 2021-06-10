import React from 'react';
import {connect} from 'react-redux';
import Month from '../calendar/Month';
import { increaseMonth, decreaseMonth } from '../modules/dateInfo';

const MonthContainer = ({year, month, increaseMonth, decreaseMonth}) => {
    return (
        <Month year={year} month={month} onIncrease={increaseMonth} onDecrease={decreaseMonth} />
    );
};

const mapStateToProps = state => ({
    year: state.year,
    month: state.month
});

const mapDispatchToProps = dispatch => ({
    increaseMonth: () => {
        dispatch(increaseMonth());
    },
    decreaseMonth: () => {
        dispatch(decreaseMonth());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MonthContainer);