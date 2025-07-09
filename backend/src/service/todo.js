const todoService = (repository) => {
  return {
    getAllTodos: async () => {
      try {
        return await repository.getAllTodos();
      } catch (error) {
        console.error("Failed to fetch all todos:", error);
        throw new Error("Unable to fetch all todos. Please try again later.");
      }
    }
  };
};

module.exports = todoService;