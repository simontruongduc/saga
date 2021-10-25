import * as taskConstants from "../Constants/Task";
export const fetchTasks = () =>{
    return {
        type: taskConstants.FETCH_TASKS,
    };
};

export const fetchTasksSuccess = (data) =>{
    return {
        type: taskConstants.FETCH_TASKS_SUCCESS,
        payload:{
            data,
        },
    };
};
export const fetchTasksError = (error) =>{
    return {
        type: taskConstants.FETCH_TASKS_FAILED,
        payload:{
            error,
        },
    };
};
