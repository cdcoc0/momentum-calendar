import React, {useCallback} from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './styles/TodoTemplate.scss';
import dayjs from 'dayjs';

const TodoTemplate = ({input, onChangeInput, insertTodo, toggleTodo, removeTodo,
                        year, month, date}) => {
    const doc = dayjs(`${month + 1}`).format('MMMM');
    console.log(doc);

    const onInsert = useCallback(() => {
        insertTodo(input, year, month, date);
    }, [input, year, month, date, insertTodo]);

    const onRemove = useCallback(id => {
        const ok = window.confirm('Delete?');
        if (ok) {
            removeTodo(doc, id);
        }
    }, [removeTodo, doc]);

    const onToggle = useCallback((id, done) => {
        toggleTodo(doc, id, done);
    }, [toggleTodo, doc]);
    
    return (
        <div className="TodoTemplate">
            <TodoInsert onInsert={onInsert} input={input} onChangeInput={onChangeInput} />
            <TodoList onRemove={onRemove} onToggle={onToggle} year={year} month={month} date={date} />
        </div>
    );
}

export default TodoTemplate;