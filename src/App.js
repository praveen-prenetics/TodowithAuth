import React, {useState} from 'react';
import Main from './Compononts/Main';
import './Compononts/Stylesheet.css'
// import List from './Compononts/List';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]); 
  return (
    <div className="App">
      <div><Main input={input} setInput={setInput} todos={todos} setTodos={setTodos}/></div>
      {/* <div><List todos={todos} setTodos={setTodos} /></div> */}
    </div>
  );
}

export default App;
