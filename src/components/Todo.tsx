import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = (todo) => {
    
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          className="border px-3 py-2 outline-none rounded-l-lg"
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          type="submit"
          className="border border-l-0 px-3 py-2 bg-blue-500 text-white rounded-r-lg"
        >
          Add
        </button>
      </form>

      <ul className="mt-5">
        {todoList?.map((data, _) => (
          <li className="flex items-center border border-gray-300 bg-gray-100 px-3 py-2 rounded-lg [&:not(:last-child)]:mb-3">
            <input type="checkbox" />
            <p className="w-[400px] text-center">{data.text}</p>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
