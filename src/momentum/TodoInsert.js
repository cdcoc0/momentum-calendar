import React, {useCallback} from 'react';
import './styles/TodoInsert.scss';

const TodoInsert = ({input, onChangeInput, onInsert}) => {
    const onTodoChange = useCallback(e => onChangeInput(e.target.value), [onChangeInput]);
    
    const onTodoSubmit = useCallback(async (e) => {
        e.preventDefault();
        onInsert();
        onChangeInput('');
    }, [onInsert, onChangeInput]);

    return(
        <form className="TodoInsert" onSubmit={onTodoSubmit}>
            <input type="text" placeholder="to do" onChange={onTodoChange} value={input} required />
            <button type="submit">+</button>
        </form>
    );
};

export default TodoInsert;