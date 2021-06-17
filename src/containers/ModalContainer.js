import React from 'react';
import {connect} from 'react-redux';
import Modal from '../calendar/Modal';
import { deleteTodo, changeTodoInput, toggleTodo, postTodo } from '../modules/todos';

const ModalContainer = ({today, open, close, input, deleteTodo, changeTodoInput, toggleTodo, postTodo, userObj}) => {
    return (
        <Modal today={today} open={open} close={close} input={input} 
            deleteTodo={deleteTodo} changeTodoInput={changeTodoInput} toggleTodo={toggleTodo} postTodo={postTodo} userObj={userObj} />
    );
}

export default connect(
    state => ({
        today: state.dateInfo.today,
        input: state.todos.input
    }),
    {
        changeTodoInput,
        postTodo,
        toggleTodo,
        deleteTodo
        
    }
)(ModalContainer);