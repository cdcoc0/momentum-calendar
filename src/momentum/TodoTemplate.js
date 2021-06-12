import React, {useCallback} from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './styles/TodoTemplate.scss';
import { dbService } from '../fbconfig';

const TodoTemplate = ({input, todos, onChangeInput, insertTodo, toggleTodo, removeTodo,
                        year, month, date}) => {

    const onInsert = useCallback(() => {
        insertTodo(input, year, month, date);
    }, [input, year, month, date, insertTodo]);

    const onRemove = useCallback(id => {
        const ok = window.confirm('Delete?');
        if (ok) {
            removeTodo(id);
        }
    }, [removeTodo]);

    const onToggle = useCallback(id => {
        toggleTodo(id);
    }, [toggleTodo]);
    
    return (
        <div className="TodoTemplate">
            <TodoInsert onInsert={onInsert} input={input} onChangeInput={onChangeInput} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );
}

export default TodoTemplate;