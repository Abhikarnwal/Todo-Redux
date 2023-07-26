import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todoitem from "./Todoitem";

export default function Todo() {
  return (
    <div>
      <Routes> 
        <Route path='/' element={<Home />} ></Route>
        <Route path='/todoitem/:id' element={<Todoitem />} ></Route>
      </Routes>
    </div>
  );
}
