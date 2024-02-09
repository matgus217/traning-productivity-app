import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
  
    const addTodo = () => {
      if (todo !== "") {
        setTodos([...todos, todo]);
        setTodo("");
      }
    };
  
    const deleteTodo = (text) => {
      const newTodos = todos.filter((todo) => {
        return todo !== text;
      });
      setTodos(newTodos);
    };
  
    return (
      <div className="App">
        <h1>What's on the schedule today?</h1>
  
        <div className="input-wrapper">
          <input
            type="text"
            name="todo"
            value={todo}
            placeholder="Add your scheduled items"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button className="button1" onClick={addTodo}>
            Add
          </button>
        </div>
  
        {todos?.length > 0 ? (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <div className="todo">
                <li key={index}> {todo} </li>
  
                <button
                  className="button2"
                  onClick={() => {
                    deleteTodo(todo);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="blank">
            <p>The schedule is empty</p>
          </div>
        )}
      </div>
    );
  };
  
  export default App;