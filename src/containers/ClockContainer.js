import React from 'react';
import {connect} from 'react-redux';
import Clock from '../momentum/Clock';

const ClockContainer = ({initializeDate}) => {
    return (
        <Clock initializeDate={initializeDate} />
    );
}

export default connect(
    state => ({
        initializeDate: state.dateInfo.initializeDate
    })
    )(ClockContainer);