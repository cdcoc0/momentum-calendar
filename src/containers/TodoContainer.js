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

const mapStateToProps = state => ({
    input: state.todos.input,
    initializeDate: state.dateInfo.initializeDate
});

const mapDispatchToProps = dispatch => ({
    changeTodoInput: input => {
        dispatch(changeTodoInput(input))
    },
    postTodo: (text, year, month, initDate, creatorId) => {
        dispatch(postTodo(text, year, month, initDate, creatorId))
    },
    toggleTodo: (id, done) => {
        dispatch(toggleTodo(id, done))
    },
    deleteTodo: (id) => {
        dispatch(deleteTodo(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);