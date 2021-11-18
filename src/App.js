import "./App.css";
import { useState } from "react";

const TODO_KEY = "todos";

const getLocalStorage = () => {
  const value = localStorage.getItem(TODO_KEY);
  return JSON.parse(value);
};

const updateLocalStorage = (todos) => {
  return localStorage.setItem(TODO_KEY, JSON.stringify(todos));
};

function App() {
  const previous_todos = getLocalStorage();
  const [todos, setTodos] = useState(previous_todos ? previous_todos : []);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    // add only if input is not empty
    if (inputValue) {
      // create a new copy of current todos
      const new_todos = [...todos, inputValue];
      // update todos state
      setTodos(new_todos);
      // update localStorage with new todos
      updateLocalStorage(new_todos);
      // clears input field
      setInputValue("");
    }
  };

  const handleKey = (e) => {
    if (e.code === 'Enter') {
      handleAdd();
    }
  };

  const handleDelete = (index) => {
    // create a new copy
    const new_todos = [...todos];
    // remove item at index
    new_todos.splice(index, 1);
    setTodos(new_todos);
    updateLocalStorage(new_todos);
  };

  return (
    <div className="App">
      <div>
        <input
          className="input-field"
          type="text"
          placeholder="Enter your todo item"
          onKeyPress={handleKey}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></input>
        <button onClick={handleAdd}>
          Add
        </button>

        <ul>
          {todos.map((item, index) => {
            return (
              <div key={item} className="row">
                <li>{item}</li>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
