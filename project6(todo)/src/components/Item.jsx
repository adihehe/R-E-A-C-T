import React, { useContext, useState } from 'react'
import { useTodo } from '../todocontext/Todo'



function TodoItem({ todo }) {
    let {edit,deleteTodo,toggle} = useTodo()
    let [canEdit,setEdit] = useState(false);
    let [todoMsg,setTodoMsg] = useState(todo.Todowork);
    const editTodo = () => {
        edit(todo.ID, {...todo, todo: todoMsg})
        setEdit(false)
      }
    const toggleCompleted = ()=>{
        toggle(todo.ID)

    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    canEdit ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!canEdit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (canEdit) {
                        editTodo();
                    } else setEdit((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {canEdit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.ID)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
