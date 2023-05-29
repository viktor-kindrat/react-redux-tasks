const initialState = 0;

export default (state = initialState, action)=>{
    switch (action.type) {
        case "counter/increment":
            return state + 1
        case "counter/decrement":
            return state - 1
        default:
            return state
    }

}