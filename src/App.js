/**
 * The App function returns a JSX element that renders the Todo component inside a div with the class
 * name "App" and a heading "TodoApp".
 * @returns The App component is returning a div with the class name "App", containing an h1 element
 * with the text "TodoApp" and a Todo component.
 */

import "./App.css";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="App">
      <h1>TodoApp</h1>
      <Todo />
    </div>
  );
}

export default App;
