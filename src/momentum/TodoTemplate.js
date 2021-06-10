import React, {useState, useCallback} from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './styles/TodoTemplate.scss';

const TodoTemplate = () => {
    const todoLS = localStorage.getItem('TODO');
    const [todos, setTodos] = useState(todoLS ? JSON.parse(todoLS) : []);

    const onInsert = useCallback(text => {
        let nextId = todoLS ? JSON.parse(todoLS).length + 1 : 1;
        const todo = {id: nextId, text, done: false};
        setTodos(todos.concat(todo));
        localStorage.setItem("TODO", JSON.stringify(todos.concat(todo)));
        nextId += 1;
    }, [todos, todoLS]);

    const onRemove = useCallback(id => {
        const filter = todos.filter(todo => todo.id !== id);
        setTodos(filter);
        localStorage.setItem("TODO", filter ? JSON.stringify(filter) : null);
    }, [todos]);

    const onToggle = useCallback(id => {
        const toggle = todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo);
        setTodos(toggle);
        localStorage.setItem("TODO", JSON.stringify(toggle))
    }, [todos]);
    
    return (
        <div className="TodoTemplate">
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );
}

export default TodoTemplate;