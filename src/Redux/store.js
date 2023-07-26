import { legacy_createStore as createStore } from "redux";
import { TodoReducer } from "./TodoReducer";


const initalStore={
   todos:[]
}

export const store=createStore(TodoReducer,initalStore);

console.log(store.getState())