import React, {useCallback, useEffect, useState} from 'react';
import { dbService } from '../fbconfig';
import ModalItem from './ModalItem';
import './styles/Modal.scss';

const Modal = ({today, open, close, input, deleteTodo, changeTodoInput, toggleTodo, postTodo, userObj}) => {
    const [load, setLoad] = useState([]);

    const onChange = useCallback(e => {
        changeTodoInput(e.target.value);
    }, [changeTodoInput]);

    const onInsert = useCallback(() => {
        postTodo(input, today.year, today.month, today.date, userObj.uid)
    }, [input, today, postTodo, userObj]);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        onInsert();
        changeTodoInput('');
    }, [onInsert, changeTodoInput]);

    const onRemove = useCallback(id => {
        const ok = window.confirm('delete?');
        if(ok) { deleteTodo(id); }
    }, [deleteTodo]);

    const onToggle = useCallback((id, done) => {
        toggleTodo(id, done);
    }, [toggleTodo])

    useEffect(() => {
        dbService.collection("kirri").where("todo.creatorId", "==", userObj.uid)
                                        .where("todo.dates.year", "==", today.year)
                                        .where("todo.dates.month", "==", today.month)
                                        .where("todo.dates.date", "==", today.date)
                                        .orderBy("todo.timestamp", "asc")
                                        .onSnapshot(s => {
            const getArray = s.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setLoad(getArray);
        });
    }, [today, userObj])
    return (
        <div className={`Modal ${open ? 'openModal' : null}`}>
            {open && (
                <section>
                    <header>
                        <div className="dateinfo">
                            {`${today.year}-${today.month + 1 < 10 ? `0${today.month + 1}` : today.month + 1}-${today.date < 10 ? `0${today.date}` : today.date}`}
                        </div>
                    </header>
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder="todo" value={input} onChange={onChange} autoFocus required />
                        <button className="insert-btn">+</button>
                    </form>
                    <div className="list">
                        {load.map(todo => (<ModalItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />))}
                    </div>
                    <footer>
                        <button className="close-btn" onClick={() => {close(); changeTodoInput('');}}>Close</button>
                    </footer>
                </section>
            )}
        </div>
    );
}

export default Modal;