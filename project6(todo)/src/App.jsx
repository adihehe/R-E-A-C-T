import { useEffect, useId, useState } from 'react'
import { Todoprovider } from './todocontext/Todo'
import { Todo } from './todocontext/Todo';

import TodoForm from './components/Form';
import TodoItem from './components/Item';

function App() {
  let [Todos, setTodo] = useState([]);
  const add = (todo) => {

    setTodo((prev) => [{ ID: Date.now(), ...todo }, ...prev])
  }
  // console.log(Todos);
  let edit = (ID, ele) => {
    setTodo((prev) => prev.map((item) => (item.ID == ID ? ele : item)))

  };
  const deleteTodo = (ID) => {
    setTodo((prev) => prev.filter((todo) => todo.ID !== ID))
  }
  let toggle = (ID) => { setTodo((prev) => prev.map((item) => item.ID == ID ? { ...item, completed: !item.completed } : item)) };

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("Todos"));
    if (arr && arr.length > 0) {
      setTodo(arr)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos))
  }, [Todos])
  console.log(Todos);

  return (
    <Todoprovider value={{ Todos, add, edit, deleteTodo, toggle }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {Todos.map((todo) => (
              <div key={todo.ID} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>

        </div>
      </div>
    </Todoprovider>

  )
}

export default App
