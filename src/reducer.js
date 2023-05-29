import { combineReducers } from 'redux'
import counterSlice from "./Components/App/counterSlice";

const initialState = {};

const reducer = combineReducers({
    counter: counterSlice
})

export default reducer