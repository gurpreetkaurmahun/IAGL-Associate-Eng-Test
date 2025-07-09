import React, { Component } from "react";
import Todo from "./Todo";
import { fetchTodos } from "../actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

class TodoList extends Component {
  state = {
    message: "",
    messageType: ""
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleAddNewTodo = () => {
    this.props.navigate("/create");
  };

  setMessage = (msg, type) => {
    this.setState({ message: msg, messageType: type });
    setTimeout(() => {
      this.setState({ message: "", messageType: "" });
    }, 3000);
  };

  render() {
    const todos = this.props.data || [];
    const { message, messageType } = this.state;

    if (!todos.length) {
      return <div>No todos, yay!</div>;
    }

    return (
      <div className="container-fluid">
        <h1 className="mb-4 text-center">Your Todos</h1>

        {message && (
          <div className={`alert ${messageType === "success" ? "alert-success" : "alert-danger"}`}>
            {message}
          </div>
        )}

        <table className="table">
          <thead>
            <tr>
        
              <th>Title</th>
              <th>Description</th>
              <th>Is Completed</th>
            
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                setMessage={this.setMessage}
              />
            ))}
          </tbody>
        </table>

        <div className="text-center my-4">
          <button className="btn btn-success" onClick={this.handleAddNewTodo}>
            Add New Todo
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false, error = null }) => ({
  data,
  isLoadingData,
  error
});

const ConnectedTodoList = connect(mapStateToProps, { fetchTodos })(TodoList);

export default function TodoListWithNavigate() {
  const navigate = useNavigate();
  return <ConnectedTodoList navigate={navigate} />;
}


