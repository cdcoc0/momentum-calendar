import React, {useCallback} from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './styles/TodoTemplate.scss';

const TodoTemplate = ({input, onChangeInput, postTodo, toggleTodo, removeTodo, initializeDate}) => {
    const {year, month, date} = initializeDate;
    const onInsert = useCallback(() => {
        postTodo(input, year, month, date);
    }, [input, year, month, date, postTodo]);

    const onRemove = useCallback(id => {
            removeTodo(id);
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