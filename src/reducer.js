import { combineReducers } from "redux";
import todoSlice from "./features/todoSlice"

let reducer = combineReducers({
    todo: todoSlice
})

export default reducer