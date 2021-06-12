import React from 'react';
import {connect} from 'react-redux';
import { changeTodoInput, insertTodo, toggleTodo, removeTodo } from '../modules/todos';
import TodoTemplate from '../momentum/TodoTemplate';

const TodoContainer = ({input, todos, changeTodoInput, insertTodo, toggleTodo, removeTodo}) => {
    return (
        <TodoTemplate input={input} todos={todos} 
            onChangeInput={changeTodoInput} insertTodo={insertTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    );
};

const mapStateToProps = state => ({
    input: state.todos.input,
    todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
    changeTodoInput: input => {
        dispatch(changeTodoInput(input))
    },
    insertTodo: (nextId, text) => {
        dispatch(insertTodo(nextId, text))
    },
    toggleTodo: id => {
        dispatch(toggleTodo(id))
    },
    removeTodo: id => {
        dispatch(removeTodo(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);