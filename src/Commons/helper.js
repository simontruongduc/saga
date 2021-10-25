import {toast} from "react-toastify";

export const toastError = (error) =>{
    var {message} = error;
    if(message !== null && typeof message !== 'undefined' && message !== ''){
        toast.error(message);
    }
};