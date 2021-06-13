import React, {useCallback, useEffect, useState} from 'react';
import { dbService } from '../fbconfig';
import ModalItem from './ModalItem';
import './styles/Modal.scss';

const Modal = ({today, open, close}) => {
    const [modalValue, setModalValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [load, setLoad] = useState([]);

    const onChange = useCallback(e => {
        setModalValue(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        const nextId = todoList.length + 1;
        const todo = {id: nextId, todo: modalValue}
        setTodoList(todoList.concat(todo));
    }, [modalValue, todoList]);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        onInsert();
        setModalValue('');
    }, [onInsert]);

    const onRemove = useCallback(id => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    }, [todoList]);

    useEffect(() => {
        dbService.collection("kirri").where("todo.dates.year", "==", today.year)
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
    }, [])
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
                        <input type="text" placeholder="todo" value={modalValue} onChange={onChange} />
                        <button className="insert-btn">+</button>
                    </form>
                    <div className="list">
                        {load.map(todo => (<ModalItem key={todo.id} todo={todo} onRemove={onRemove} />))}
                    </div>
                    <footer>
                        <button className="close-btn" onClick={() => {close(); setModalValue('');}}>Close</button>
                    </footer>
                </section>
            )}
        </div>
    );
}

export default Modal;