import React from 'react';
import {MdHighlightOff} from 'react-icons/md';
import {GrNorton} from 'react-icons/gr'
import './styles/ModalItem.scss';

const ModalItem = ({todo, onRemove}) => {
    return (
        <div className="ModalItem">
            <div className="content">
                <GrNorton className="checkIcon" />
                {todo.todo}
            </div>
            <MdHighlightOff className="remove" onClick={() => onRemove(todo.id)} />
        </div>
    );
}

export default ModalItem;