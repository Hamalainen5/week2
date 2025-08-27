let todosArray = [];
let nextId = 1;

function addOne(task, dueDate, completed = false) {
  if (!task || !dueDate) {
    return false;
  }

  const newTodo = {
    id: nextId++,
    task,
    dueDate,
    completed,
  };

  todosArray.push(newTodo);
  return newTodo;
}

function getAll() {
  return todosArray;
}

function findById(id) {
  const numericId = Number(id);
  const todo = todosArray.find(item => item.id === numericId);
  return todo || false;
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        if (typeof updatedData.completed === 'boolean') todo.completed = updatedData.completed;
        return todo; // Returns the updated todo object
    } return false; // Returns false if the todo with the provided ID is not found
} 
function deleteOneById(id) {
  const todo = findById(id);
  if (todo) {
    const initialLength = todosArray.length;
    todosArray = todosArray.filter(todo => todo.id !== Number(id));
    return todosArray.length < initialLength; // Returns true if a todo was deleted
  } return false; // Returns false if the todo with the provided ID is not found
} 
if (require.main === module) {
    // Add todos
    let result = addOne("Buy groceries", "2023-10-01");
    console.log(result);
    result = addOne("Walk the dog", "2023-10-02", true);
    console.log(result);

    console.log("getAll called:", getAll());

    // Find by ID
    console.log("findById(1) called:", findById(1));
    console.log("findById(99) called:", findById(99)); // Non-existent ID

    // Update by ID
    console.log("updateOneById(1, { task: 'Buy groceries and cook dinner' }) called:", updateOneById(1, { task: 'Buy groceries and cook dinner' }));
    console.log("updateOneById(99, { task: 'Non-existent task' }) called:", updateOneById(99, { task: 'Non-existent task' })); // Non-existent ID

    // Delete by ID
    console.log("deleteOneById(2) called:", deleteOneById(2));
    console.log("deleteOneById(99) called:", deleteOneById(99)); // Non-existent ID

    console.log("Final getAll called:", getAll());
}
const Todo = {
  getAll,
  addOne,  
  findById,
  updateOneById,  
  deleteOneById,
};
module.exports = Todo;
