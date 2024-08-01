import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    { text: "Task 1", completed: false },
    { text: "Task 2", completed: false },
  ]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    if (input !== "") {
      // add task if not an empty string
      setTasks((tasks) => [...tasks, { text: input, completed: false }]);
      console.log(tasks);
    }
  };

  const handleCheckboxChange = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((element, i) => i !== index);

    setTasks(updatedTasks);
  };

  return (
    <div className="bg-stone-300 p-5 h-screen">
      <h1 className="text-5xl my-3 text-center text-red-600">Todo List</h1>

      <form className="flex justify-center">
        <input
          onChange={(e) => setInput(e.target.value)} // get user input
          className="p-2 rounded-md"
          type="text"
          placeholder="Add task"
        />
        <button
          onClick={addTask} // add tasks
          className="bg-blue-500 text-white py-1 px-3 border rounded-md"
        >
          Add
        </button>
      </form>

      {/* Todo Items */}
      <div className="flex justify-center mt-3">
        <ul>
          {tasks.map((task, index) => (
            <div key={index}>
              <li className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(index)}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <p
                  className={`text-lg font-bold ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.text}
                </p>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 text-xl font-bold hover:text-red-800"
                >
                  x
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
