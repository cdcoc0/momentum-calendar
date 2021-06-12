import React from 'react';
import {connect} from 'react-redux';
import { changeTodoInput, insertTodo, toggleTodo, removeTodo } from '../modules/todos';
import TodoTemplate from '../momentum/TodoTemplate';

const TodoContainer = ({input, todos, changeTodoInput, insertTodo, toggleTodo, removeTodo, year, month, initDate}) => {
    return (
        <TodoTemplate input={input} todos={todos} year={year} month={month} date={initDate}
            onChangeInput={changeTodoInput} insertTodo={insertTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    );
};

const mapStateToProps = state => ({
    input: state.todos.input,
    todos: state.todos.todos,
    year: state.dateInfo.year,
    month: state.dateInfo.month,
    initDate: state.dateInfo.initDate
});

const mapDispatchToProps = dispatch => ({
    changeTodoInput: input => {
        dispatch(changeTodoInput(input))
    },
    insertTodo: (nextId, text, year, month, initDate) => {
        dispatch(insertTodo(nextId, text, year, month, initDate))
    },
    toggleTodo: (id, done) => {
        dispatch(toggleTodo(id, done))
    },
    removeTodo: id => {
        dispatch(removeTodo(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);