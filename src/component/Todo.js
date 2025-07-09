import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo, updateToDosStatus } from "../actions";

const Todo = ({ todo }) => {


  const dispatch = useDispatch();

  const handleToggleStatus = () => {
   alert("Todo clicked for update");
  };

  const handleDelete = () => {
   alert("Todo clicked for delete");
  };

 

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleToggleStatus}
        />
      </td>
      <td>
   
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Todo;
