
import { apiClient } from "../../api/ApiClient";

const retrieveAllToDos=()=>{
   return apiClient.get("/");
}

const addToDo = (title, description) => {
    return apiClient.post("/", { title, description });
  }
  

const updateToDo=(id,isCompleted)=>{
   return apiClient.patch(`/${id}`, { isCompleted });
}

const deleteToDo=(id)=>{
   return apiClient.delete(`/${id}`);
}

export {retrieveAllToDos,addToDo,updateToDo,deleteToDo};