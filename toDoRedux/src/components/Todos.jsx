// Step4: Selector
// Selectors are functions used to extract specific pieces of data from the store's state.
import { React, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateTodo, removeTodo } from "../features/todo/todoSlice";

function Todos() {

  const todos = useSelector(state => state.todos) 
  // state parameter inside the arrow function represents the entire state tree stored in Redux
  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState({});
  // It stores the todo id as the key and a boolean value indicating 
  // whether the item is in edit mode.
  const handleEditClick = (id, text) => {
    setEditMode({...editMode, [id]: !editMode[id]});
    if(editMode[id]) {
      dispatch(updateTodo({id, newText: text}));
    }
  } 
  // this function toggles the edit mode for a specific todo item 

  return(
    <>
    {/* <div>Todos</div>
    {todos.map((todo) => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => dispatch(removeTodo(todo.id))}> </button>
      </li> 
    ))}
   */}
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editMode[todo.id] ? (
              <input
              type="text"
              value={todo.text}
              onChange={(e) => dispatch(updateTodo({ id: todo.id, newText: e.target.value }))}
              autoFocus
            />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-300 shrink-0"
              onClick={() => handleEditClick(todo.id, todo.text)}
          >
              {editMode[todo.id] ? '📁' : '✏️'}
          </button>
          </li>
        ))}
      </ul>
   </>
  ) 
}

export default Todos 



// if editMode of todo is true 
//   display an input field with old text
// else 
//   display text only

// When the component initializes or renders for the first time, 
// the editMode state will be an empty object {}
// Upon clicking the edit button, the id of that todo item will be added to the editMode state,
// indicating that it's in the edit mode.

// editMode changes when button is clicked
