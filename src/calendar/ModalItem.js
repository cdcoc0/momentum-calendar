import React from 'react';
import cn from 'classnames';
import {MdHighlightOff} from 'react-icons/md';
import {GrNorton} from 'react-icons/gr'
import './styles/ModalItem.scss';

const ModalItem = ({todo, onRemove, onToggle}) => {
    const {text, done} = todo.todo;
    return (
        <div className="ModalItem">
            <div className={cn('content', {done})} onClick={() => onToggle(todo.id, done)}>
                <GrNorton className="checkIcon" />
                {text}
            </div>
            <MdHighlightOff className="remove" onClick={() => onRemove(todo.id)} />
        </div>
    );
}

export default ModalItem;