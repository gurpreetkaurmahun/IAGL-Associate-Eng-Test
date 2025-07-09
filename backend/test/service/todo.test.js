describe('TODO Service', () => {
  it('should be able to get todos from repository', async () => {
    // `async` here enables the use of `await` inside this function
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

    const todoRepository = {
      getAllTodos: async () => Promise.resolve(expected)
    };

    const todoService = require('../../src/service/todo')(todoRepository);
    const actual = await todoService.getAllTodos();

    expect(actual).toEqual(expected);
  });
});
