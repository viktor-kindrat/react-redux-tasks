import searchSlice from "./features/searchSlice"
import { combineReducers } from "redux"

let reducer = combineReducers({
    search: searchSlice
})

export default reducer