import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux"

function Form (){
    let input = useRef()
    let data = useSelector(state=> state.todo);
    console.log(data)
    let dispatch = useDispatch()

    let clickHandler = (e)=>{
        let value = input.current.value;
        dispatch({type: "todo/addTask", payload: `${value.trim()}`});
        input.current.value = ""
        console.log(data)
    }
    return (
        <div className="Form">
            <input ref={input} type="text" placeholder="Enter new task"/>
            <button onClick={clickHandler}>Add</button>
        </div>
    )
}

export default Form