import { useContext, createContext } from "react";


export const Todo = createContext({
  Todos: [
    {
      ID: 1,
      Todowork: "task-name",
      completed: false

    }
  ],
  add: (ele) => { },
  edit: (ID, ele) => { },
  deleteTodo: (ID) => { },
  toggle: (ID) => { }

})

export const Todoprovider = Todo.Provider;

export const useTodo = () => {
  return useContext(Todo)
}



