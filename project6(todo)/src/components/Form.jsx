import React, { useState } from 'react'
import { useTodo } from '../todocontext/Todo'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {add} = useTodo()

    const addTodo = (e) => {
      e.preventDefault()
      console.log(todo);
      if (!todo) return
      let www = todo
      add({Todowork : www, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={addTodo}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;