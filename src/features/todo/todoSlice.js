import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1,text:"Demo Task",isCompleted:false}]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {
        addToDo: (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        editToDo: (state,action) => {
            state.todos = state.todos.map((todo) => {
                if(action.payload[0] === todo.id) {
                    return { ...todo, text: action.payload[1] };
                }
                return todo;
            });
        },  
        removeToDo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(action.payload === todo.id) {
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo;
            })
        }
    }
})

export const {addToDo,removeToDo,editToDo,toggleComplete} = todoSlice.actions
export default todoSlice.reducer