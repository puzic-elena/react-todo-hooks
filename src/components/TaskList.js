import React, { useContext, useEffect, useRef, useMemo } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
    const taskContainer = useRef(null);
    const { state } = useContext(TaskListContext);

    useEffect(()=>{
        console.log( 'state',state);

        console.log(taskContainer.current.parentElement.clientHeight);
    });

    let list = useMemo(() => {
        return state && state.length
            ?  state.map(task => <Task task={task} key={task.id} />)
            : (
                <div className="no-tasks">
                    No Tasks
                </div>
            )
    }, [state]);

    return (
        <div ref={taskContainer} >
            {(
                <ul className="list">
                    { list }
                </ul>
            ) }
        </div>

    );
};

export default TaskList;