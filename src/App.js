import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for walk",
    "Take the rubbish out",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>
        Hello, World!{" "}
        <span role="img" aria-label="emoji">
          👍
        </span>
      </h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
