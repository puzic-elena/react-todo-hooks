import React, { useContext, useEffect, useRef } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
    const taskContainer = useRef(null);
    const { state } = useContext(TaskListContext);

    useEffect(()=>{
        console.log( 'state',state);

        console.log(taskContainer.current.parentElement.clientHeight);
    });

    return (
        <div ref={taskContainer} >
            {state.length ? (
                <ul className="list">
                    {state.map(task => {
                        return <Task task={task} key={task.id} />
                    })}
                </ul>
            ) : (
                <div className="no-tasks">
                    No Tasks
                </div>
            )}
        </div>
    );
};

export default TaskList;