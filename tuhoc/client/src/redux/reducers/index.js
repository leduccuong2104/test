import { combineReducers } from "redux";
import posts from './posts';
import signIn from './signIn';
import signUp from './signUp';
import goods from './goods';
import add from './add';
import saveData from './saveData';


export default combineReducers({
    posts,
    signIn,
    signUp,
    goods,
    add,
    saveData,
})