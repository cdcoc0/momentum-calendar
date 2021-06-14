import { dbService, firebaseInstance } from '../fbconfig';

const CHANGE_TODO_INPUT = 'todos/CHANGE_TODO_INPUT';
const POST_TODO = 'todos/POST_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';

export const changeTodoInput = input => ({
    type: CHANGE_TODO_INPUT,
    input
});

export const postTodo = (text, year, month, date) => ({
    type: POST_TODO,
    todo: {
        text,
        done: false,
        dates: {
            year,
            month,
            date
        },
        timestamp: firebaseInstance.firestore.FieldValue.serverTimestamp(),
    }
});

export const toggleTodo = (id, done) => ({
    type: TOGGLE_TODO,
    id,
    done
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});

const Post = async (todo) => {
    dbService.collection("kirri").add({
        todo
    })
};

const Delete = async (id) => {
    await dbService.doc(`kirri/${id}`).delete();
};

const Toggle = async (id, done) => {
    await dbService.doc(`kirri/${id}`).update({
        "todo.done": !done
    });
};

const initialState = {
    input: '',
};

function todos(state = initialState, action) {
    switch(action.type) {
        case CHANGE_TODO_INPUT:
            return {
                ...state,
                input: action.input
            }

        case POST_TODO:
            Post(action.todo);
            return null;

            case TOGGLE_TODO:
            Toggle(action.id, action.done);
            return null;

        case DELETE_TODO:
            Delete(action.id);
            return null;

        default:
            return state;
    }
};

export default todos;