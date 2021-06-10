import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const ListContainer = styled.div`
    min-height: 50px;
    max-height: 320px;
    overflow-y: auto;
    //background-color: white;
`

const TodoList = ({todos, onRemove, onToggle}) => {
    return(
        <ListContainer>
            {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)}
        </ListContainer>
    );
};

export default TodoList;