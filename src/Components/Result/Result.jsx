import { useSelector } from "react-redux"

function Result (){
    let data = useSelector(state => state.search.searchingResult);
    console.log(data)
    return (
        <div className="Result">
            <h1>Searching result:</h1>
            <ol>
                {
                    data.map((item, index)=> 
                        <li key={index}>{item}</li>
                    )
                }
            </ol>
        </div>
    )
}

export default Result