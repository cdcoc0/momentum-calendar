import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../fbconfig';
import TodoItem from './TodoItem';

const ListContainer = styled.div`
    min-height: 50px;
    max-height: 320px;
    overflow-y: auto;
`
// const get = async () => {
//     const newwts = await dbService.collection("kiri").get();
//     newwts.forEach(document => {
//     const nweetIbj = {...document.data(), id: document.id}
//      setNweets((prev) => [document.data(), ...prev]});

const TodoList = ({todos, onRemove, onToggle}) => {
    const [load, setLoad] = useState([]);
    useEffect(() => {
        dbService.collection("kirri").onSnapshot(s => {
            const getArray = s.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setLoad(getArray);
        })
    }, [])
    return(
        <ListContainer>
            {load.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)}
        </ListContainer>
    );
};

export default TodoList;