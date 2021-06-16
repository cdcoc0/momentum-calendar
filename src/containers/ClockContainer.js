import React from 'react';
import {connect} from 'react-redux';
import Clock from '../momentum/Clock';

const ClockContainer = ({initializeDate}) => {
    return (
        <Clock initializeDate={initializeDate} />
    );
}

const mapStateToProps = state => ({
    initializeDate: state.dateInfo.initializeDate
});

export default connect(
    mapStateToProps)(ClockContainer);