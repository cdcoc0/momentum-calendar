import React from 'react';
import {connect} from 'react-redux';
import Clock from '../momentum/Clock';

const ClockContainer = ({month, initDate}) => {
    return (
        <Clock month={month} date={initDate} />
    );
}

const mapStateToProps = state => ({
    month: state.month,
    initDate: state.initDate
});

export default connect(
    mapStateToProps)(ClockContainer);