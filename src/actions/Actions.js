export const actionTypes = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    CLEAR_TASKS: 'CLEAR_TASKS',
    FIND_TASK: 'FIND_TASK',
    EDIT_TASK: 'EDIT_TASK',
};

export const createTask = todo => ({
    type: actionTypes.ADD_TASK,
    todo
});

export const deleteTask = todo => ({
    type: actionTypes.REMOVE_TASK,
    todo
});

export const editTask = payload => ({
    type: actionTypes.EDIT_TASK,
    payload
});

export const cleanTasks = () => ({
    type: actionTypes.CLEAR_TASKS,
});

export const detectTask = payload => ({
    type: actionTypes.FIND_TASK,
    payload
});