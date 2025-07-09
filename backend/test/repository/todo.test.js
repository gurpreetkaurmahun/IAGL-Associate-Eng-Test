const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = [
      {
        id: 1,
        title: "Task 1",
        description: "My first task of the day",
        isCompleted: false
      },
      {
        id: 2,
        title: "Task 2",
        description: "My second task of the day",
        isCompleted: false
      }
    ];
    
    const actual = await repository.getAllTodos();

    console.log("Fetched todos:", actual);
    expect(actual.todos).toEqual(expected);
  });
});
