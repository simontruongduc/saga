import * as taskConstants from "../Constants/Task";
import {toastError} from "../Commons/helper";
const initialState = {
    listTask: [],
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case taskConstants.FETCH_TASKS:{
            return {
                ...state,
                listTask: [],
            };
        }
        case taskConstants.FETCH_TASKS_SUCCESS:{
            const {data} = action.payload;
            return {
                ...state,
                listTask: data,
            };
        }
        case taskConstants.FETCH_TASKS_FAILED:{
            const {error} = action.payload;
            toastError(error);
            return {
                ...state,
                listTask: [],
            };
        }
        default :
            return state;
    }
};
export default tasks;