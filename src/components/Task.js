import React, { useContext } from "react";
import { TaskListContext} from "../context/TaskListContext";

const Task = ({ task }) => {
    const { removeTask, findItem, setEditingTask } = useContext(TaskListContext);
    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button
                    className="btn-delete task-btn"
                    onClick={() => removeTask(task.id)}
                >
                    <i className="fas">
                        &times;
                    </i>
                </button>{' '}
                <button className="btn-edit task-btn" onClick={() => setEditingTask(findItem(task.id))}>
                    <i className="fas fa-pen">&#9998;</i>
                </button>
            </div>
        </li>
    );
};

export default Task;