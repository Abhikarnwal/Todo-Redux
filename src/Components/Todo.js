/**
 * The Todo function is a React component that defines the routes for the Home and Todoitem components.
 * @returns The Todo component is returning a div element that contains the Routes component. The
 * Routes component is responsible for rendering different components based on the current URL path. It
 * has two Route components as children. The first Route component has a path of '/' and renders the
 * Home component when the URL matches this path. The second Route component has a path of
 * '/todoitem/:id' and renders the Todoitem component when
 */

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
