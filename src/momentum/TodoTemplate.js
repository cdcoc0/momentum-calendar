import React, {useCallback} from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './styles/TodoTemplate.scss';
import { dbService } from '../fbconfig';

const TodoTemplate = ({input, todos, onChangeInput, insertTodo, toggleTodo, removeTodo,
                        year, month, date}) => {
    const todoLS = localStorage.getItem('TODO');

    const onInsert = useCallback(() => {
        let nextId = todoLS ? JSON.parse(todoLS).length + 1 : 1;
        insertTodo(nextId, input, year, month, date);
    }, [todoLS, input, year, month, date, insertTodo]);

    const onRemove = useCallback(id => {
        removeTodo(id);
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