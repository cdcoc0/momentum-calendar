import React from 'react';
import {MdRemoveCircleOutline, MdCheckBoxOutlineBlank ,MdCheckBox} from 'react-icons/md';
import './styles/TodoItem.scss'
import cn from 'classnames';

const TodoItem = ({todo, onRemove, onToggle}) => {
    //console.log(todo.id);
    const {text, done} = todo;

    return (
        <div className="TodoItem">
            <div className={cn('checkbox', {done})} onClick={() => onToggle(todo.id, done)}>
                {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(todo.id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>

        //id????????
    );
};

export default TodoItem;