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
    const [load, setLoad] = useState();
    const [num, setNum] = useState([]);
    const [text, setText] = useState([])

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

        // load.map(l => {
        //     for(let i = 1; i <= 31; i++) {
        //         if(l.todo.dates.date === i) {
        //             array.push(i);
        //         };
        //     };
        // });
        // for(let i = 0; i < array.length; i++) {
        //     if(array[i] !== 'more') {
        //         for(let j = array.length; j > i; j--) {
        //             if(array[i] === array[j]) {
        //                 array.splice(j, 1);
        //             }
        //         }
        //     }
            
            //얘좀 어케좀 해봐라..
            //if(array[i] === array[i - 1]) { array[i] = 'more' }
            //그냥 오늘 할일 다 state에 넣고 length
        //}
        // setNum(array);
    // }, [year, month])
    
    useEffect(() => {
        dbService.collection("kirri").where("todo.dates.year", "==", year)
                .where("todo.dates.month", "==", month)
                .orderBy("todo.dates.date", "asc")
                .orderBy("todo.timestamp", "asc")
                .onSnapshot(s => {
            const getArray = s.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            }));
            setLoad(getArray);
        });
        getPage();
    }, [year, month, initDate, getPage]);

    // const todoCalendar = useCallback(() => {
    //     let todoArray = []
    //     load.map(l => {
    //         for(let i = 0; i < num.length; i++) {
    //             if(l.todo.dates.date === num[i]) {
    //                 todoArray.push(l);
    //             }
    //         }
    //     })
    //     console.log(todoArray);
    // }, [])

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
                            {load && load.map(l => l.todo.dates.month === month && l.todo.dates.date === p ? 
                                <div key={l.id} className="todo" type="text">{`${l.todo.text.length > 8 ? 
                                    `${l.todo.text.slice(0, 8)} ...` : l.todo.text}`}</div> : null)}
                                {/* 일별 todo를 state에 담아야 해 일단 */}
                            {/* {p === initDate && year === today.year && month ===today.month && 
                            todos.length !== 0 ? <div className="todo" type="text">{`${todos[0].todo.text}`}</div> : null} */}
                            
                        </div>
                    </div>
                );
            } else {
                return (
                    <div key={index} className="dateBlock"><span className="other">{p}</span></div>
                );
            }
        }));
    }, [page, thisLast, today, openModal, onDateClick, load, month]);

    return (
        <div className="Dates">
            {initPage()}
        </div>
    );
}

export default Dates;
