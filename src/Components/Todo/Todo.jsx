import "./Todo.css"

import { useDispatch, useSelector } from "react-redux"

function Todo() {
    let data = useSelector(state => state.todo);
    let dispatch = useDispatch()

    let onInputHandler = (e) => {
        let value = e.target.dataset.id;
        console.log(value)
        dispatch({type: "todo/removeTask", payload: value})
    }

    return (
        <div className="Todo">
            <ul>
                {
                    (data.tasks.length > 0) ? data.tasks.map(item =><li key={item.id}><input onInput={onInputHandler} type="checkbox" data-id={item.id} /> {item.text}</li>) : "All tasks is done 👌"
                }
            </ul>
        </div>
    )
}

export default Todo