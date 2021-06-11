import React from 'react';
import {Link} from 'react-router-dom';
import User from './User';
import ClockWeatherTemplate from './ClockWeatherTemplate';
import TodoTemplate from './TodoTemplate';
import styled from 'styled-components';
import {MdNavigateBefore} from 'react-icons/md';

const Home = styled.div`
    display: flex;
    svg {
        color: white;
        font-size: 4rem;
        display: flex;
        align-items: center;
        margin-right: 1rem;
        margin-left: 1rem;
    }
`

const UserTodo = styled.div`
    flex: 1;
    //background: gold;
`

const Momentum = () => {
    return (
        <Home>
            <UserTodo>
                <User />
                <TodoTemplate />
            </UserTodo>
            <ClockWeatherTemplate />
            <Link to="/calendar"><MdNavigateBefore /></Link>
        </Home>
    );
}

export default Momentum;