import React, {useState, useCallback} from 'react';
import './styles/TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [todoInput, setTodoInput] = useState('');

    const onTodoChange = useCallback(e => setTodoInput(e.target.value), []);
    
    const onTodoSubmit = useCallback(e => {
        e.preventDefault();
        onInsert(todoInput);
        setTodoInput('');
    }, [onInsert, todoInput]);

    return(
        <form className="TodoInsert" onSubmit={onTodoSubmit}>
            <input type="text" placeholder="to do" onChange={onTodoChange} value={todoInput} />
            <button type="submit">+</button>
        </form>
    );
};

export default TodoInsert;