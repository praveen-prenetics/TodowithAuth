import React, { useState } from 'react'
import { v4 } from "uuid";


const Main = ({ input, setInput, todos, setTodos, inputData, setInputData, items, setItems }) => {
    // const save = () => {
    //     console.log(input)
    // onClick={save}
    // }
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

    // const check = (id) =>{
    //     todos[id].completed = !todos[id].completed 
    //     setTodos(todos)  
    // onClick={() => check(index)}
    // }

    [inputData, setInputData] = useState('');
    [items, setItems] = useState([]);

    console.log(todos)
    return (
        <form className="container" onSubmit={onFormSubmit}>
            <div className="top">
                <div className='menu'><p id='top'>Todos</p></div>
            </div>
            <div className="content">
                <div className="topic">
                    <div id="title"><strong>All Tasks</strong></div>
                    <div id="main">
                        <input type="text" id="textbox" placeholder="Add a new task" value={input} required
                            onChange={onInputChange} />
                        <button id="button" type="submit" >Add</button>
                    </div>
                    <div className='adjust'>
                        {todos.map((todo, index) => (
                            <div className="checkbox-container" key={todo.id}>
                                <div className='direction'>
                                    <div id="align">
                                        <input type="checkbox" />
                                        <p className='complete'>{todo.title}</p>
                                    </div>
                                    <button className="delete" onClick={() => handleDelete(todo)}><i className="fa fa-trash-o"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div id="Tasks"></div> */}
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