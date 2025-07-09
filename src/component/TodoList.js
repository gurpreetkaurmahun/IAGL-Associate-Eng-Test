import React, {Component} from "react";
import Todo from "./Todo";
import {fetchTodos} from "../actions";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }
  handleAddNewTodo = () => {
    this.props.navigate("/create");
  };

  render() {
    const todos = this.props.data || [];
    const error=this.props.error;

    console.log("Errrrror is:",error);

    if (!todos.length) {
      return <div>No todos, yay!</div>;
    }

  

    return (
      <div className="container-fluid">
        <h1 className="mb-4" style={{"marginLeft":"40%"}}>Your Todos</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Is Completed</th>
     
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              
        <Todo key={todo.id} todo={todo} />
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
const mapStateToProps = ({data = {}, isLoadingData = false}) => ({
  data,
  isLoadingData
});


const ConnectedTodoList = connect(mapStateToProps, { fetchTodos })(TodoList);

export default function TodoListWithNavigate() {
  const navigate = useNavigate();
  return <ConnectedTodoList navigate={navigate} />;
}
