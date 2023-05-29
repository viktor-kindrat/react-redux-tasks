let defState = {
    tasks: []
}

let genId = ()=>{
    return new Date().getTime();
}

let reducer = (state = defState, action) =>{
    switch (action.type) {
        case "todo/addTask": 
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: genId(),
                    text: action.payload
                }]
            }
        case "todo/removeTask": 
            console.log(`Payload is: ${action.payload}`)
            console.log(`Tasks is: `, state.tasks)
            return {
                ...state,
                tasks: [...state.tasks].filter(task => task.id !== parseInt(action.payload))
            }
        default: 
            return {...state}
    }
}

export default reducer