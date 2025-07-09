

let todoList = {
  todos: [
    {
      "id": 1,
      "title": "Task 1",
      "description": "My first task of the day",
      "isCompleted": false
    },
    {
      "id": 2,
      "title": "Task 2",
      "description": "My second task of the day",
      "isCompleted": false
    }
  ]
};

module.exports = {
  getAllTodos: () => Promise.resolve(todoList)
};