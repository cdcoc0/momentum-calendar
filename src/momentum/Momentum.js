import React from 'react';
import {Link} from 'react-router-dom';
import User from './User';
import Clock from './Clock';
import ClockContainer from '../containers/ClockContainer';
import Weather from './Weather';
import TodoTemplate from './TodoTemplate';
import {MdNavigateBefore} from 'react-icons/md';
import './styles/Momentum.scss';

const Momentum = () => {
    return (
        <div className="Momentum page">
            <div className="user-todo-container">
                <User />
                <TodoTemplate />
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