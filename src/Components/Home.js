import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../Redux/action";
import { Link } from "react-router-dom";
import { changeStatus } from "../Redux/action";
import { changeDelete } from "../Redux/action";

export default function Home() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todos);

  const handleTodo = () => {
    dispatch(
      addTodo({
        title: todo,
        status: false,
      })
    );
  };
  const handleStatus = (i) => {
    dispatch(changeStatus(i));
  };

  const handleDelete = (i) => {
    dispatch(changeDelete(i));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ADD_ITEM"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleTodo}>ADD ITEM</button>

      {todos.map((el, i) => {
        return (
          <div key={i}>
            <Link to={`/todoitem/${i}`}>{el.title}</Link>
            <button
              onClick={() => {
                handleStatus(i);
              }}
            >
              {el.status ? "Completed" : "Not Completed"}
            </button>
            <button
              onClick={() => {
                handleDelete(i);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
