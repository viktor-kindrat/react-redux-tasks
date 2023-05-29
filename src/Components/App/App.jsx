import './App.css';
import Todo from "../Todo/Todo"
import Form from '../Form/Form';

function App() {
  return (
    <div className="App">
      <h1>ToDo list</h1>
      <Form/>
      <Todo/>
    </div>
  );
}

export default App;
