import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import './App.css';
import Main from "./Pages/Main";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Login></Login> }></Route>
          <Route path="/register" element={ <Register></Register> }></Route>
          <Route path="/Main" element={ <Main></Main> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
