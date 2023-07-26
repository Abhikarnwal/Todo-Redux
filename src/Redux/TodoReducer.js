import { ADD_TODO, TOGGLE_STATUS, DELETE_TODO } from "./action";

export const TodoReducer = (store, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return { ...store, todos: [...store.todos, action.payload] };
    }

    case TOGGLE_STATUS: {
      return {
        ...store,
        todos: store.todos.map((todo, i) =>
          i === action.payload ? { ...todo, status: !todo.status } : todo
        ),
      };
    }

    case DELETE_TODO: {
      return {
        ...store,
        todos: store.todos.filter((todo, id) =>{
          return id !== action.payload
        } ),
      };
    }
    default:
      return store;
  }
};
