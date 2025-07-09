import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom"; 
import store from "./store";
import HeaderComponent from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component/Todo.css";
import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
 
    
 <BrowserRouter>     
  <HeaderComponent/>      
  <TodoApp />
</BrowserRouter>
   
  </Provider>,
  rootElement
);