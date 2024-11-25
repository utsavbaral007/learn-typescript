import { useState } from "react";

const Todo = () => {
  interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
  }

  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: Date.now(), text: todoInput, completed: false },
    ]);
    setTodoInput("");
  };

  const completeTodo = (id: number) => {
    setTodoList(
      todoList.map((data) =>
        data.id === id ? { ...data, completed: !data.completed } : data
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodoList(todoList.filter((data) => data.id !== id));
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          value={todoInput}
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
          <li
            key={data.id}
            className="flex items-center border border-gray-300 bg-gray-100 px-3 py-2 rounded-lg [&:not(:last-child)]:mb-3"
          >
            <input
              type="checkbox"
              checked={data.completed}
              onChange={() => completeTodo(data.id)}
            />
            <p
              className={`${
                data.completed ? "line-through" : ""
              } w-[400px] text-center truncate px-3`}
            >
              {data.text}
            </p>
            <button
              onClick={() => removeTodo(data.id)}
              className="bg-red-500 px-2 py-1 text-white text-sm font-light rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
