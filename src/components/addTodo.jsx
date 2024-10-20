import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToDo } from "../features/todo/todoSlice"

function AddTodo() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const addToDoHandler = (event) => {
        event.preventDefault();
        dispatch(addToDo(input));
        setInput('');
    }
    return (
    <>
        <form onSubmit={addToDoHandler} className="addToDo-form">
            <input type="text" placeholder="Add task" value={input} onChange={(event) => setInput(event.target.value)} required className="addToDo-input"/>
            <button className="addToDo-btn">Add</button>
        </form>
    </>
  )
}

export default AddTodo