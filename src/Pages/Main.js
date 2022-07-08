import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import axios from '../API/axios';
import { v4 } from "uuid";


const Main = () => {
    let [input, setInput] = useState('');
    let [todos, setTodos] = useState([]);


    const onInputChange = (event) => {
        setInput(event.target.value)
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: v4(), title: input, completed: false }]);
        setInput("");
    }

    const handleDelete = (item) => {
        setTodos(todos.filter((todo) => todo.id !== item.id))
    }

    const logout = () => {
        navigate('/')
    }

    const navigate = useNavigate('');
    console.log(todos)

    return (
            <form className="container" onSubmit={onFormSubmit}>
                <div className="head">
                    <div className='menu'><p id='top'>Todos</p></div>
                    <div className="logbtn" id='out' onClick={logout}>Logout</div>
                </div>
                <div className="outtop">
                    <div className="out">
                        <div id="tname"><strong>All Tasks</strong></div>
                        <div id="center">
                            <input type="text" id="textbox" placeholder="Add a new task" value={input} required
                                onChange={onInputChange} />
                            <button id="button" type="submit" >Add</button>
                        </div>
                        <div className='detail'>
                            {todos.map((todo, index) => (
                                <div className="box-container" key={todo.id}>
                                    <div className='task'>
                                        <div id="arrow">
                                            <input type="checkbox" />
                                            <p className='complete'>{todo.title}</p>
                                        </div>
                                        <button className="remove" onClick={() => handleDelete(todo)}><i className="fa fa-trash-o"></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div id="quotes" align="center">
                            {todos.length === 0 && <label>Seems like a quiet day</label>}
                        </div>
                    </div>
                </div>
            </form>
    )
}


export default Main











   // const additem = () => {
    //     if (!inputData) {
    //     } else {
    //         setItems([...items, inputData]);
    //         setInputData('')
    //     }
    // }
    // onClick={additem}

        // const handleComplete = (todo) => {
    //       setTodos(
    //         todos.map((item) =>{
    //             if(item.id === todo.id){
    //                 return{...item, complete: !item.completed}
    //             }
    //             return item;
    //         } )
    //       )
    // }

    // let [inputData, setInputData] = useState('');
    // let [items, setItems] = useState('');


    // input, setInput, todos, setTodos, inputData, setInputData, items, setItems

    // const save = () => {
    //     console.log(input)
    // onClick={save}
    // }
    // const { setAuth } = useContext(AuthContext);

    // const check = (id) =>{
    //     todos[id].completed = !todos[id].completed
    //     setTodos(todos)
    // onClick={() => check(index)}
    // }

    // [inputData, setInputData] = useState('');
    // [items, setItems] = useState([]);

    // let login = (e) => {
    //     e.preventDefault();
    //     fetch(`http://localhost:3000/Main`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //   };