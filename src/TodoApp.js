import React from "react";
import TodoList from "./component/TodoList";
import { Routes, Route } from "react-router-dom";
import NewToDo from "./component/Newtodo";
import "./styles.css";

export default function TodoApp() {
  return (
    <Routes>
      
      <Route path="/" element={<TodoList />} />
      <Route path="/create" element={<NewToDo />} />
      <Route path="/create/:id" element={<NewToDo />} />

    </Routes>
  );
}