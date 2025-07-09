
import { apiClient } from "../api/ApiClient";

import { FETCH_TODOS,
        DELETE_TODO,ADD_TODO,
        UPDATE_TODO_STATUS,
        CATCH_TODO_ERROR 
      } 
        from "./types";

import {retrieveAllToDos,updateToDo,deleteToDo} from "../component/TodoApi/TodoApi";

export function fetchTodos() 
{

  return function(dispatch) {
    return retrieveAllToDos().then(({ data }) => {

        console.log("Fetched todos after update:", data); 
        dispatch(setTodos(data));
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        dispatch(catchTodoError(error));
      });;
  };
}
export const addTodos = (title, description) => {
  return async (dispatch) => {
    try {
      const { data } = await apiClient.post("/", { title, description });
      dispatch({ type: ADD_TODO, payload: data });
    } catch (error) {
      console.error("Error adding todo:", error);
      dispatch(catchTodoError(error));
    }
  };
};


export const updateToDosStatus = (id, isCompleted) => {
  return async (dispatch) => {
    try {
      const response = await updateToDo(id,isCompleted);
      dispatch({
        type: UPDATE_TODO_STATUS,
        payload: response.data,
      });
      console.log("Updated todo status:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating todo status:", error);
      dispatch(catchTodoError(error));
      throw error;
    }
  };
};

export const deleteToDos = (id) => {
  return async (dispatch) => {
    try {
      const response = await apiClient.delete(`/${id}`);
      console.log("Delete response:", response.data);
      dispatch({ type: DELETE_TODO, payload: id });
    } catch (error) {
      console.error("Error deleting todo:", error);
      dispatch(catchTodoError(error));
      throw error;
    }
  };
};

export const catchTodoError = (error) => {

  let message = "Something went wrong";

  if (error.response && error.response.data && error.response.data.message) {
    message = error.response.data.message; 
  } else if (error.message) {
    message = error.message; 
  }

  return {
    type: CATCH_TODO_ERROR,
    payload: message,
  };
};

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}

