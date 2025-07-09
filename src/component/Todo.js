import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDos, updateToDosStatus } from "../actions";
import { Modal, Button } from "react-bootstrap";


const Todo = ({ todo, setMessage }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(deleteToDos(todo.id))
      .then(() => {
        setMessage("Todo deleted successfully!", "success");
      })
      .catch((err) => {
        setMessage("Failed to delete todo.", "error");
        console.error(err);
      })
      .finally(() => setShowModal(false));
  };

  const handleToggleStatus = () => {
    dispatch(updateToDosStatus(todo.id, !todo.isCompleted)).catch((err) =>
      console.error("Failed to update status", err)
    );
  };

  return (
    <>
      <tr>

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
          <button
            className="btn btn-danger btn-md"
            onClick={() => setShowModal(true)}
          >
            Delete
          </button>
        </td>
      </tr>

      {/* Delete Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this todo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Todo;
