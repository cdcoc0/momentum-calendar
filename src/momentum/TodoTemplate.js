import React, {useCallback} from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './styles/TodoTemplate.scss';
import { dbService } from '../fbconfig';

const TodoTemplate = ({input, onChangeInput, insertTodo, toggleTodo, removeTodo,
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

    const onToggle = useCallback((id, done) => {
        toggleTodo(id, done);
    }, [toggleTodo]);
    
    return (
        <div className="TodoTemplate">
            <TodoInsert onInsert={onInsert} input={input} onChangeInput={onChangeInput} />
            <TodoList onRemove={onRemove} onToggle={onToggle} year={year} month={month} date={date} />
        </div>
    );
}

export default TodoTemplate;