import React from 'react';
import {connect} from 'react-redux';
import { changeTodoInput, postTodo, toggleTodo, deleteTodo } from '../modules/todos';
import TodoTemplate from '../momentum/TodoTemplate';

const TodoContainer = ({input, changeTodoInput, postTodo, toggleTodo, deleteTodo, year, month, initDate}) => {
    return (
        <TodoTemplate input={input} year={year} month={month} date={initDate}
            onChangeInput={changeTodoInput} insertTodo={postTodo} toggleTodo={toggleTodo} removeTodo={deleteTodo} />
    );
};

const mapStateToProps = state => ({
    input: state.todos.input,
    year: state.dateInfo.year,
    month: state.dateInfo.month,
    initDate: state.dateInfo.initDate
});

const mapDispatchToProps = dispatch => ({
    changeTodoInput: input => {
        dispatch(changeTodoInput(input))
    },
    postTodo: (nextId, text, year, month, initDate) => {
        dispatch(postTodo(nextId, text, year, month, initDate))
    },
    toggleTodo: (doc, id, done) => {
        dispatch(toggleTodo(doc, id, done))
    },
    deleteTodo: (doc, id) => {
        dispatch(deleteTodo(doc, id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);