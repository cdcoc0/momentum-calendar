import React from 'react';
import {Link} from 'react-router-dom';
import User from './User';
import ClockContainer from '../containers/ClockContainer';
import Weather from './Weather';
import TodoContainer from '../containers/TodoContainer';
import {RiCalendar2Fill} from 'react-icons/ri';
import './styles/Momentum.scss';

const Momentum = () => {
    return (
        <div className="Momentum page">
            <div className="nav-container">
                <Link to="/calendar">
                    <div className="moment-nav">
                        <RiCalendar2Fill className="cal-icon" />
                        <span className="cal-font">calendar</span>
                    </div>
                </Link>
            </div>
            <div className="user-todo-container">
                <User />
                <TodoContainer />
            </div>
            <div className="clock-weather-container">
                <ClockContainer />
                <Weather />
            </div>
        </div>
    );
}

export default Momentum;