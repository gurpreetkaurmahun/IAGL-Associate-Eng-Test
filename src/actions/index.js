import axios from "axios";
import { apiClient } from "../api/ApiClient";

import { FETCH_TODOS,ADD_TODO,
      
      } 
        from "./types";

import {retrieveAllToDos} from "../component/TodoApi/TodoApi";

export function fetchTodos() 
{

  return function(dispatch) {
    return retrieveAllToDos().then(({ data }) => {

        console.log("Fetched todos after update:", data); 
        dispatch(setTodos(data));
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
   
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
   
    }
  };
};

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}