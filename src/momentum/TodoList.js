import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../fbconfig';
import TodoItem from './TodoItem';

const ListContainer = styled.div`
    min-height: 50px;
    max-height: 320px;
    overflow-y: auto;
`

const TodoList = ({onRemove, onToggle, year, month, date}) => {
    const [load, setLoad] = useState([]);
    useEffect(() => {
        dbService.collection("kirri").where("todo.dates.year", "==", year)
                                        .where("todo.dates.month", "==", month)
                                        .where("todo.dates.date", "==", date)
                                        .orderBy("todo.timestamp", "asc")
                                        .onSnapshot(s => {
            const getArray = s.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setLoad(getArray);
        });
    }, [])

    // const m = dayjs(`${month + 1}`).format('MMMM');
    //     dbService.collection("kirri").doc(m).onSnapshot(s => {
    //         const getArray = [];
    //         if(s.data()) {
    //             s.data().todos.map(todo => getArray.push(todo));
    //         }
    //         setLoad(getArray);

    return(
        <ListContainer>
            {load.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)}
        </ListContainer>
    );
};

export default TodoList;