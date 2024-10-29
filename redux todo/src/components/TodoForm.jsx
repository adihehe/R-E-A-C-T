import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/slice';

function TodoForm() {
    const [message, setmessage] = useState("")
    const addplz = useDispatch()
const addnewTodo = (e)=>{
    e.preventDefault();
    addplz(addTodo(message))
    setmessage("")
}

    
    return (
        <form  className="flex" onSubmit={addnewTodo}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={message}
                onChange={(e)=>setmessage(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

