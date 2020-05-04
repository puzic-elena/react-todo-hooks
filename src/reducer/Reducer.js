import { actionTypes } from "../actions/Actions.js";

const reducer = (state=[], action) => {


    switch (action.type) {

        case actionTypes.ADD_TASK:
            // let {title, id} = action.todo;
            return [...state, action.todo];


        case actionTypes.REMOVE_TASK:
            // let { id } = action.todo;
            return state.filter(task => task.id !== action.todo.id);


        case actionTypes.EDIT_TASK:
            //const { title, id } = action.payload;
            return state.map(task => (task.id === action.payload.id ? action.payload : task));


        case actionTypes.CLEAR_TASKS:
            return [];


        case actionTypes.FIND_TASK:
            return [{title: 'one', id: 345}];

        default:

            return state;
    }

};

export default reducer;