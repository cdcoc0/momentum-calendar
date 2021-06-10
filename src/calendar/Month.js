import React from 'react';
import {IoCaretBackSharp, IoCaretForwardSharp} from 'react-icons/io5';
import dayjs from 'dayjs';
import './styles/Month.scss';

const Month = ({year, month, onIncrease, onDecrease}) => {
    const formMonth = dayjs(`${month + 1}`).format('MMMM')
    return (
        <div className="Header">
            <div onClick={onDecrease}><IoCaretBackSharp /></div>
            <div className="month" type="text">{`${formMonth} ${year}`}</div>
            <div onClick={onIncrease}><IoCaretForwardSharp /></div>
        </div>
    );
};

export default Month;