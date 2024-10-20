import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToDo,toggleComplete } from "../features/todo/todoSlice";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import Edit from "../components/edit";

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const [editTodoId, setEditTodoId] = useState(null);

    const handleEdit = (id) => {
        setEditTodoId(id);
    }

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id} className="todos-div" style={{textDecoration:(todo.isCompleted)?"line-through":""}}>
                    <span className="todos-text">{todo.text}</span>
                    <span className="todos-btn-span">
                        <button onClick={() => handleEdit(todo.id)} className="todos-edit-btn"><MdEdit size={20}/></button>
                        <button onClick={() => dispatch(removeToDo(todo.id))} className="todos-remove-btn"><MdDelete size={20}/></button>
                        <button onClick={() => dispatch(toggleComplete(todo.id))} className="todos-complete-btn"><IoIosCheckbox size={20}/></button>
                    </span>

                    {editTodoId === todo.id && (
                        <Edit 
                            dispatch={dispatch} 
                            id={todo.id}
                            setShowEdit={() => setEditTodoId(null)} 
                        />
                    )}
                </div>
            ))}
        </>
    );
}

export default Todos;