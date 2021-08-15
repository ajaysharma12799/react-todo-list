import React, { useState, useEffect } from 'react'
import Card from './components/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  const handleChange = (e) => {
      setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(todo === "" || todo === null) {
        toast.error("Please Enter Something");
      }
      else {
        addToLocalStorage();
        toast.success("Todo Added Successfully");
        setTodo("");
      }
  }

  const addToLocalStorage = () => {
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const deleteTodo = (e) => {
    const newTodos = [...todos];
    console.log(newTodos);
    let content = e.target.parentElement.parentElement.textContent;
    let index = newTodos.findIndex((element) => element === content);
    console.log(content, index);
    newTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="container">
      <div className="heading">
        <h1>What's Plan For Today</h1>
      </div>
      <div className="form">
        <div>
          <input type="text" placeholder="What's New For Today" name="todo" value={todo} onChange={(e) => handleChange(e)} />
        </div>
        <div className="submitButton">
          <button type="submit" onClick={(e) => handleSubmit(e)}>Add Todo</button>
        </div>
      </div>
      <div className="output">
      {
        todos.map((todo, index) => (
          <Card key={index} todo={todo} deleteTodo={deleteTodo} />
        ))
      }
      </div>
      </div>
    </React.Fragment>
  )
}

export default App
