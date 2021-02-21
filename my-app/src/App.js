import React, { useState, useEffect } from "react";
import Todo1 from "./Todo";
import db from "./firebase";


export default function App() {
  const [Todo, setTodo] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodo(
        snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
      );
    });
  }, []);

  const tiklama = (event) => {
    db.collection("todos").add({
      todo: input,
    });
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>ToDo List</h1>
        <div style={{ paddingTop: "20px" }}>
          <input placeholder="Todo text"
            style={{ marginRight: "10px" }}
            value={input}
            onChange={(event) => setinput(event.target.value)}
          />
          <button disabled={!input} type="submit" onClick={tiklama}>
            Add Todo
          </button>
        </div>
        <div style={{ alignItems: "center" }}>
          {Todo.map((todo) => (
            <Todo1 todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}
