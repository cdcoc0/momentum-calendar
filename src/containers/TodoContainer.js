import React from 'react';
import {connect} from 'react-redux';
import { changeTodoInput, postTodo, toggleTodo, deleteTodo } from '../modules/todos';
import TodoTemplate from '../momentum/TodoTemplate';

const TodoContainer = ({userObj, input, changeTodoInput, postTodo, toggleTodo, deleteTodo, initializeDate}) => {
    return (
        <TodoTemplate input={input} initializeDate={initializeDate} userObj={userObj}
            onChangeInput={changeTodoInput} postTodo={postTodo} toggleTodo={toggleTodo} removeTodo={deleteTodo} />
    );
};

export default connect(
    state => ({
        input: state.todos.input,
        initializeDate: state.dateInfo.initializeDate
    }), 
    {
        changeTodoInput,
        postTodo,
        toggleTodo,
        deleteTodo
    }
)(TodoContainer);