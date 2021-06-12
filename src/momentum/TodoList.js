import React from 'react';
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

//dbService.collection("nweets").onSnapshot(snapshot => { console.log(snapshot.docs.map)})
// }

const TodoList = ({todos, onRemove, onToggle}) => {
    return(
        <ListContainer>
            {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)}
        </ListContainer>
    );
};

export default TodoList;