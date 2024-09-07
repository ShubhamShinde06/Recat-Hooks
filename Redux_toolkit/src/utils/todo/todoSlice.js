import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id:1,
            text:"hello world"
        }
    ]
}

/*
function sayHello() {
    console.log('hello world')
}
*/

export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
            todo.id === action.id 
            ?
            action
            :
            todo
        )
        }
    }
})

export const {addTodo, removeTodo} = todosSlice.actions

export default todosSlice.reducer