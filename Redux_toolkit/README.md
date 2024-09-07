# Redux toolkit

```npm install @reduxjs/toolkit```
```npm install react-redux```

## Create floder `app` in `store.js`

```
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({})
```

## Create floder `utils` in `todo` than `todoSlice.js`

```
import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text:"hello world"}]
}


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
```

* `state` update value in the store
* `action` 

## Go to floder `app` in `store.js`

```
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../utils/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
```

* will be value send using `useDispatch()`
* will be value give using `useSelector()`

