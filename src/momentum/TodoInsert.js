import React, {useCallback} from 'react';
import './styles/TodoInsert.scss';

const TodoInsert = ({input, onChangeInput, onInsert}) => {
    const onTodoChange = useCallback(e => onChangeInput(e.target.value), [onChangeInput]);
    
    const onTodoSubmit = useCallback(e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }, [onInsert, input, onChangeInput]);

    return(
        <form className="TodoInsert" onSubmit={onTodoSubmit}>
            <input type="text" placeholder="to do" onChange={onTodoChange} value={input} />
            <button type="submit">+</button>
        </form>
    );
};

export default TodoInsert;