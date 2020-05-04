import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
    const { addTask, clearList, editTasks, editingTask, setEditingTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    useEffect(() => {
        if(editingTask !== null) {
            setTitle(editingTask.title);
        }

    }, [editingTask])

    const handleSubmit = e => {
        e.preventDefault();
        if (!editingTask){
            addTask(title);
            setTitle('');
        } else {
            editTasks(title, editingTask.id);
            setTitle('');
            setEditingTask(null);
        }
    }

    const handleChange = e => {
        setTitle(e.target.value);
    }

    return (
        <form onSubmit = { handleSubmit } className="form">
            <input
                type="text"
                placeholder="Add task..."
                value={title}
                onChange={ handleChange }
                required
                className="task-input"
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    { editingTask ? 'Save' : 'Add Task'}
                </button>
                <button className="btn clear-btn" onClick={ clearList }>
                    Clear
                </button>
            </div>
        </form>
    );
};

export default TaskForm;