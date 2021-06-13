import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../fbconfig';
import dayjs from 'dayjs';
import TodoItem from './TodoItem';

const ListContainer = styled.div`
    min-height: 50px;
    max-height: 320px;
    overflow-y: auto;
`

const TodoList = ({onRemove, onToggle, year, month, date}) => {
    const [load, setLoad] = useState([]);
    useEffect(() => {
        const m = dayjs(`${month + 1}`).format('MMMM');
        dbService.collection("kirri").doc(m).onSnapshot(s => {
            console.log(s.data());
            const getArray = [];
            if(s.data()) {
                s.data().todos.map(todo => getArray.push(todo));
            }
            setLoad(getArray);
            //오늘 날짜 데이터 가져와야 함
            //orderBy("todo.timestamp", "asc").
            //배열 필드 정렬
        });
    }, [])
    return(
        <ListContainer>
            {load.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)}
        </ListContainer>
    );
};

export default TodoList;