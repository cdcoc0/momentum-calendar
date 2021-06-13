import { dbService, firebaseInstance } from '../fbconfig';
import dayjs from 'dayjs';
import {v4 as uuidv4} from 'uuid';

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
        timestamp: new Date(),
        id: uuidv4()
        //firebaseInstance.firestore.FieldValue.serverTimestamp()
    }
});

export const toggleTodo = (doc, id, done) => ({
    type: TOGGLE_TODO,
    doc,
    id,
    done
});

export const deleteTodo = (doc, id) => ({
    type: DELETE_TODO,
    doc,
    id
});


const Post = async (todo) => {
    const m = dayjs(`${todo.dates.month + 1}`).format('MMMM');
    const doc = await dbService.collection("kirri").doc(m).get();
    if(doc.exists) {
        await dbService.collection("kirri").doc(m).update({
            todos: firebaseInstance.firestore.FieldValue.arrayUnion(todo)
        });
    } else {
        await dbService.collection("kirri").doc(m).set({
            todos: [todo]
        });
    }
    
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


const Delete = async (doc, id) => {
    await dbService.doc(`kirri/${doc}`).update({
        todos: firebaseInstance.firestore.FieldValue.arrayRemove()
    })
};

const Toggle = async (doc, id, done) => {
    
    await dbService.doc(`kirri/${doc}`).update({
        "todo": !done
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
            Toggle(action.doc, action.id, action.done);
            return {
                ...state,
                todos: toggle
            };
        case DELETE_TODO:
            const filter = state.todos.filter(todo => todo.id !== action.id)
            Delete(action.doc, action.id);
            return {
                ...state,
                todos: filter
            };
        default:
            return state;
    }
};

export default todos;