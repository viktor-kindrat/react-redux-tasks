import {createStore} from "@reduxjs/toolkit"
import rootReducer from "./reducer"

let store = createStore(rootReducer);

export default store