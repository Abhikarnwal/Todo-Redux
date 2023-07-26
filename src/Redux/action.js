// Action Types

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const DELETE_TODO = "DELETE_TODO";

//Action

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const changeStatus = (id) => {
  return {
    type: TOGGLE_STATUS,
    payload: id,
  };
};

export const changeDelete = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
