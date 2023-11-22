// Step2: reducer
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id:1, text: "Say Hello World"}]
}

// slice
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //console.log(action.type)
      const todo = {
        id: nanoid(),
        text: action.payload,
        // payload is an object
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const {id, newText} = action.payload
      state.todos = state.todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo)
    }
  }
})

// In rtk functions are not only declared but also defined here only
// addTodo: (state, action) => {}
// state: current value of state
// action: whatever parameters are required by method are provided thr action, eg. -> id

// we seperately export all actions so components can you whichever is needed
export const {addTodo, removeTodo, updateTodo } = todoSlice.actions

// store needs to list of all reducers
export default todoSlice.reducer 