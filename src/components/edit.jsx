import { useState } from "react";
import { editToDo } from "../features/todo/todoSlice";

function Edit({ dispatch, id, setShowEdit }) { 
    const [newTask, setNewTask] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(editToDo([id, newTask]));
        setShowEdit(false); // Close the edit form after submission
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="edit-form">
                <input 
                    className="edit-input"
                    placeholder="Enter Edited Task"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                    required
                />
                <div className="edit-buttons">
                    <button type="submit" className="edit-submit-btn">Submit</button>
                    <button type="button" className="edit-cancel-btn" onClick={() => setShowEdit(false)}>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default Edit;
