import React from 'react';
import {Link} from 'react-router-dom';
import User from './User';
import ClockContainer from '../containers/ClockContainer';
import Weather from './Weather';
import TodoContainer from '../containers/TodoContainer';
import {MdNavigateBefore} from 'react-icons/md';
import './styles/Momentum.scss';

const Momentum = () => {
    return (
        <div className="Momentum page">
            <div className="invisible-space">
            </div>
            <div className="user-todo-container">
                <User />
                <TodoContainer />
            </div>
            <div className="clock-weather-container">
                <ClockContainer />
                <Weather />
            </div>
            <div className="nav-container">
            <Link to="/calendar"><MdNavigateBefore /></Link>
            </div>
        </div>
    );
}

export default Momentum;