const todoService = (repository) => {
  return {
    getAllTodos: async () => {
      try {
        return await repository.getAllTodos();
      } catch (error) {
        console.error("Failed to fetch all todos from repository:", error);
        throw new Error("Unable to fetch all todos");
      }
    },

    getTodoById: async (id) => {
      try {
        const todo = await repository.getTodoById(id);
        if (!todo) {
          console.warn(`Todo with ID ${id} not found`);
          throw new Error(`Todo with ID ${id} not found`, 'Todo not found');
        }
        return todo;
      } catch (error) {
        if (error instanceof NotFoundError) {
          throw error;
        }
        console.error(`Failed to fetch todo with ID ${id} from repository:`, error);
        throw new Error(`Unable to fetch todo with ID ${id}`);
      }
    },

    saveNewTodo: async (title, description) => {
      try {
        const allTodos = await repository.getAllTodos();
        const nextId = idGenerator(allTodos);

        const newTodo = {
          id: nextId,
          title,
          description,
          isCompleted: false,
        };

        if (newTodo.title==""){
          return (" null title");
        }

        return await repository.saveNewTodo(newTodo);
      } catch (error) {
        console.error("Failed to save new todo: ", error);
        throw new Error("Unable to save new todo");
      }
    },

    updateStatus: async (id, isCompleted) => {
      try {
        const updatedTodo = await repository.updateStatus(id, isCompleted);
        if (!updatedTodo) {
          throw new Error(`Todo with ID ${id} not found`, 'Todo not found');
        }
        return updatedTodo;
      } catch (error) {
        if (error instanceof NotFoundError) {
          throw error;
        }
        console.error(`Failed to mark todo with ID ${id} as complete:`, error);
        throw new DataAccessError(`Unable to update todo with ID: ${id} status`);
      }
    },

    deleteTodoById: async (id) => {
      try {
        const deletedTodo = await repository.deleteTodoById(id);
        if (!deletedTodo) {
          throw new Error(`Todo with ID ${id} not found`, 'Todo not found');
        }
        return deletedTodo;
      } catch (error) {
        if (error instanceof NotFoundError) {
          throw error;
        }
        console.error(`Failed to delete todo with ID ${id}:`, error);
        throw new Error(`Unable to delete todo with ID ${id}`);
      }
    }

  };
};

function idGenerator(allTodos) {
  if (allTodos.length === 0) return 1;
  const maxId = Math.max(...allTodos.map(todo => todo.id));
  return maxId + 1;
}

module.exports = todoService;