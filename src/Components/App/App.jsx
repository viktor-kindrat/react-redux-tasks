import './App.css';

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch()

  console.log(data)
  let increment = ()=>{
    dispatch({type: "counter/increment"})
  }
  let decrement = ()=>{
    dispatch({type: "counter/decrement"})
  }
  return (
    <div className="App">
      <h1>Counter has value {data}</h1>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
}

export default App;
