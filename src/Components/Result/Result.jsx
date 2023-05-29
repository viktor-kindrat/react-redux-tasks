import { useSelector } from "react-redux"

function Result (){
    let data = useSelector(state => state.search.searchingResult);
    console.log(data)
    return (
        <div className="Result">
            <h1>Searching result:</h1>
            <ul>
                {
                    data.map((item, index)=> 
                        <ul key={index}>{item}</ul>
                    )
                }
            </ul>
        </div>
    )
}

export default Result