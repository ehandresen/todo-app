
function TodoList() {
  return (
    <div className="bg-stone-300 p-5 h-screen">
        <h1 className="text-3xl my-3 text-center text-red-600">Todo List</h1>

        <div className="flex justify-center">
            <input className="p-2 rounded-md" type="text" placeholder="Add item" />
            <button className="bg-blue-500 text-white py-1 px-3 border rounded-md">Add</button>
        </div>
    </div>
  )
}

export default TodoList