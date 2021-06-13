import { dbService, firebaseInstance } from '../fbconfig';
import dayjs from 'dayjs';

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
        timestamp: new Date()
        //firebaseInstance.firestore.FieldValue.serverTimestamp()
    }
});

export const toggleTodo = (id, done) => ({
    type: TOGGLE_TODO,
    id,
    done
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
});


const Post = async (todo) => {
    const m = dayjs(`${todo.dates.month + 1}`).format('MMMM');
    await dbService.collection("kirri").doc(m).update({
        todos: firebaseInstance.firestore.FieldValue.arrayUnion(todo)
    }); //배열 필드(todos) 업데이트로 해봐
};

// let getArray = [];
// const Get = async () => {
//     const init = await dbService.collection("kiri").get();
//     init.forEach(document => {
//      getArray.unshift(document.data())});
// }

//  const Get = () => {
//     dbService.collection("kirri").onSnapshot(s => {
//         getArray = s.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }));
//     });
// };


const Delete = async (id) => {
    await dbService.doc(`kirri/${id}`).delete();
};

const Toggle = async (id, done) => {
    await dbService.collection('kirri').doc(`${id}`).update({
        "todo.done": !done
    });
};

const initialState = {
    input: '',
    todos: []
};

function todos(state = initialState, action) {
    switch(action.type) {
        case CHANGE_TODO_INPUT:
            return {
                ...state,
                input: action.input
            }
        case POST_TODO:
            const insert = state.todos.concat(action.todo);
            Post(action.todo);
            return {
                ...state,
                todos: insert
            }
        case TOGGLE_TODO:
            const toggle = state.todos.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
            Toggle(action.id, action.done);
            return {
                ...state,
                todos: toggle
            };
        case DELETE_TODO:
            const filter = state.todos.filter(todo => todo.id !== action.id)
            Delete(action.id);
            return {
                ...state,
                todos: filter
            };
        default:
            return state;
    }
};

export default todos;