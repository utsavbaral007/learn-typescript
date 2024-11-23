import { useState } from "react";

const DeleteList = () => {
  const todoItems = ["Play football", "study", "play badminton"];
  const [newTodo, setNewTodo] = useState([...todoItems]);

  const handleDelete = (i: number) => {
    newTodo.splice(i, 1);
    setNewTodo([...newTodo]);
  };

  return (
    <ul>
      {newTodo?.map((data, index) => (
        <li key={index}>
          {data}{" "}
          <button
            onClick={() => handleDelete(index)}
            className="border px-2 py-1 bg-red-500 text-white rounded-md"
          >
            Delete Item
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DeleteList;
