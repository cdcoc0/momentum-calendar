import { dbService } from '../fbconfig';

const CHANGE_TODO_INPUT = 'todos/CHANGE_TODO_INPUT';
const INSERT_TODO = 'todos/INSERT_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

export const changeTodoInput = input => ({
    type: CHANGE_TODO_INPUT,
    input
});

export const insertTodo = (nextId, text, year, month, date) => ({
    type: INSERT_TODO,
    todo: {
        id: nextId,
        text,
        done: false,
        dates: {
            year,
            month,
            date
        },
        createdAt: Date().now()
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});
const todoLS = localStorage.getItem('TODO');

const Post = async (todo) => {
    await dbService.collection("kirri").add({
        todo
    });
};

const initialState = {
    input: '',
    todos: todoLS ? JSON.parse(todoLS) : []
};

function todos(state = initialState, action) {
    switch(action.type) {
        case CHANGE_TODO_INPUT:
            return {
                ...state,
                input: action.input
            }
        case INSERT_TODO:
            const insert = state.todos.concat(action.todo);
            localStorage.setItem("TODO", JSON.stringify(insert));
            Post(action.todo);
            return {
                ...state,
                todos: insert
            }
        case TOGGLE_TODO:
            const toggle = state.todos.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
            localStorage.setItem("TODO", JSON.stringify(toggle));
            return {
                ...state,
                todos: toggle
            };
        case REMOVE_TODO:
            const filter = state.todos.filter(todo => todo.id !== action.id)
            localStorage.setItem("TODO", filter ? JSON.stringify(filter) : null);
            return {
                ...state,
                todos: filter
            };
        default:
            return state;
    }
};

export default todos;