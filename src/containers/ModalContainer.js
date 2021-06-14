import React from 'react';
import {connect} from 'react-redux';
import Modal from '../calendar/Modal';
import { deleteTodo, changeTodoInput, toggleTodo, postTodo } from '../modules/todos';

const ModalContainer = ({today, open, close, input, deleteTodo, changeTodoInput, toggleTodo, postTodo}) => {
    return (
        <Modal today={today} open={open} close={close} input={input} 
            deleteTodo={deleteTodo} changeTodoInput={changeTodoInput} toggleTodo={toggleTodo} postTodo={postTodo} />
    );
}

const mapStateToProps = state => ({
    today: state.dateInfo.today,
    input: state.todos.input
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: (id) => {
        dispatch(deleteTodo(id))
    },
    changeTodoInput: (input) => {
        dispatch(changeTodoInput(input))
    },
    toggleTodo: (id, done) => {
        dispatch(toggleTodo(id, done))
    },
    postTodo: (text, year, month, date) => {
        dispatch(postTodo(text, year, month, date))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContainer);