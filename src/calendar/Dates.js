import React, {useCallback, useEffect, useState} from 'react';
import { dbService } from '../fbconfig';
import './styles/Dates.scss';

const getPrevDates = (plDay, plDate, prev) => {
    if(plDay !== 6) {
        for(let i = 0; i < plDay + 1; i++) {
            prev.unshift(plDate - i);
        }
    }
};

const getNextDates = (tlDay, next) => {
    for(let i = 1; i < 7 - tlDay; i++) {
        next.push(i);
    }
};

const Dates = ({year, month, initDate, prevLast, thisLast, today, onDateClick, openModal}) => {
    const [page, setPage] = useState([]);
    const [todos, setTodos] = useState([]);

    const getPage = useCallback(() => {
        const plDate = prevLast.getDate();
        const plDay = prevLast.getDay();
        const tlDate = thisLast.getDate();
        const tlDay = thisLast.getDay();
        const prev = [];
        const current = [...Array(tlDate + 1).keys()].slice(1);
        const next = [];
        getPrevDates(plDay, plDate, prev);
        getNextDates(tlDay, next);
        setPage(prev.concat(current, next));
    }, [prevLast, thisLast]);

    const getTodos = useCallback(() => {
        dbService.collection("kirri").onSnapshot(s => {
            const getArray = s.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setTodos(getArray);
            //날짜별 데이터
        })
    }, [])
    
    useEffect(() => {
        getPage();
        getTodos();
        //해당 year, month 데이터 date순으로 가져와서
        //어디 state에 담아서 뿌림
    }, [year, month, initDate, getPage, getTodos]);

    const initPage = useCallback(() => {
        const firstDateIndex = page.indexOf(1);
        const lastDateIndex = page.lastIndexOf(thisLast.getDate());
        if(!page) {return;}
        return (page.map((p, index) => {
            if(index >= firstDateIndex && index < lastDateIndex + 1) {
                return (
                    <div key={index} onClick={() => onDateClick(p)} className="dateBlock">
                        <div className={`this ${p === today.date ? 'today' : ''}`} 
                        onDoubleClick={openModal}>
                            {p}
                            {p === initDate && year === today.year && month ===today.month && 
                            todos.length !== 0 ? <div className="todo" type="text">{`${todos[0].todo.text}`}</div> : null}
                            {p === initDate && year === today.year && month ===today.month && 
                                todos.length >= 2 ? <div className="todo">more ...</div> : null}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div key={index} className="dateBlock"><span className="other">{p}</span></div>
                );
            }
        }));
    }, [page, thisLast, today, openModal, onDateClick, initDate, todos, month, year]);

    return (
        <div className="Dates">
            {initPage()}
        </div>
    );
}

export default Dates;