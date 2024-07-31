import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["task one", "task two"]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setTasks([...tasks, input]);
    console.log(tasks);
  };

  return (
    <div className="bg-stone-300 p-5 h-screen">
      <h1 className="text-5xl my-3 text-center text-red-600">Todo List</h1>

      <div className="flex justify-center">
        <input
          onChange={(e) => setInput(e.target.value)} // get user input
          className="p-2 rounded-md"
          type="text"
          placeholder="Add item"
        />
        <button
          onClick={handleClick} // add tasks
          className="bg-blue-500 text-white py-1 px-3 border rounded-md"
        >
          Add
        </button>
      </div>

      {/* Todo Items */}
      <div>
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
