import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import User from './User';
import ClockContainer from '../containers/ClockContainer';
import Weather from './Weather';
import TodoContainer from '../containers/TodoContainer';
import {RiCalendar2Fill} from 'react-icons/ri';
import {FiLogOut} from 'react-icons/fi';
import {ImPencil} from 'react-icons/im';
import { authService } from '../fbconfig';
import './styles/Momentum.scss';

const Momentum = ({userObj, refreshUser}) => {
    const [userUpdate, setUserUpdate] = useState(false);
    const onClick = () => {
        setUserUpdate(prev => !prev);
    };

    const onLogOutClick = () => {
        authService.signOut();
    }

    return (
        <div className="Momentum page">
            <div className="nav-container">
                <Link to="/calendar">
                    <div className="moment-nav">
                        <RiCalendar2Fill className="cal-icon" />
                        <span className="cal-font">calendar</span>
                    </div>
                </Link>
                <div className="btn">
                    <div title="Edit Name" className="re-write" onClick={onClick}><ImPencil /></div>
                    <div title="Log out" className="logout" onClick={onLogOutClick}><FiLogOut /></div>
                </div>
            </div>
            <div className="user-todo-container">
                <User userObj={userObj} refreshUser={refreshUser} userUpdate={userUpdate} chUserUpdate={onClick} />
                {userUpdate ? null : <TodoContainer userObj={userObj} />}
            </div>
            <div className="clock-weather-container">
                <ClockContainer />
                <Weather />
            </div>
        </div>
    );
}

export default Momentum;