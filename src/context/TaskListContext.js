import React, {createContext, useEffect, useReducer, useState} from "react";
import { v1 as uuid } from 'uuid';
import reducer from "../reducer/Reducer";
import { editTask, createTask, deleteTask, cleanTasks } from '../actions/Actions.js';

export const TaskListContext = createContext([]);

const TaskListContextProvider = props => {
    const localStorageState = localStorage.getItem('tasks');
    const initialState = localStorageState ? JSON.parse(localStorage.getItem('tasks')) : [];
    const [state, dispatch] = useReducer(reducer, initialState);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state))
    }, [state]);

    /******************** Add task ********************/

    const addTask = title => {
        const newTask = {
            title,
            id: uuid(),
        };

        dispatch(createTask(newTask))
    };

    /******************** Remove task ********************/

    const removeTask = id => {
        const remove = {
            id,
        };

        dispatch(deleteTask(remove))
    };

    /******************** Clear tasks ********************/

    const clearList = () => {
        dispatch(cleanTasks());
    };

    /******************** Edit task ********************/

    const editTasks = (title, id) => {
        const payload = {
            title,
            id,
        };

        dispatch(editTask(payload));

    };

    /******************** Find tasks ********************/

    const findItem = id =>
        state.find(task => task.id === id)
    ;


    return (
        <TaskListContext.Provider
            value={{
                editingTask,
                setEditingTask,
                state,
                findItem,
                addTask,
                editTasks,
                removeTask,
                clearList,
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;