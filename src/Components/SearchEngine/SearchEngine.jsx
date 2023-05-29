import { useSelector, useDispatch } from "react-redux"

function SearchEngine(){
    let data = useSelector(state => state.search)
    let dispatch = useDispatch()

    let changeHandler = (e)=>{
        let value = e.target.value;
        dispatch({type: "searchEngine/input", payload: value})
        console.log(data)
    }

    return (
        <div className="SearchEngine">
            <input onChange={changeHandler} type="text" placeholder="Type here to search, you can start from ''The'' word" />
        </div>
    )
}

export default SearchEngine