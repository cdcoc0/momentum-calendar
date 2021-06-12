import React, {useCallback} from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './styles/TodoTemplate.scss';

const TodoTemplate = ({input, todos, onChangeInput, insertTodo, toggleTodo, removeTodo}) => {
    const todoLS = localStorage.getItem('TODO');

    const onInsert = useCallback(() => {
        let nextId = todoLS ? JSON.parse(todoLS).length + 1 : 1;
        insertTodo(nextId, input)
    }, [todoLS, input, insertTodo]);

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