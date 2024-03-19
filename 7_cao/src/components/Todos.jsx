import { useState, useEffect } from "react";
import "./todos.css";

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const countTodos = todos.length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <h1>You have {countTodos} Todos</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className="deleteOne" onClick={() => deleteTodo(index)}>
                X
              </button>
            </li>
          ))}
        </ul>
        <div className="submitInput">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter item..."
          />
          <button className="submitButton" type="submit">
            Submit
          </button>
        </div>
        <button className="deleteAll" onClick={() => setTodos([])}>
          Clear All
        </button>
      </form>
    </div>
  );
};

export default Todos;
