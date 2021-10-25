import {combineReducers} from "redux";
import tasks from "./tasks";
import loading from "./loading";
const appReducer = combineReducers({
    tasks,
    loading
});

export default appReducer;