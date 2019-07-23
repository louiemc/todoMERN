import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TodosList from "./components/TodosList";
import EditTodo from "./components/TodoEdit";
import CreateTodo from "./components/TodoCreate";

import logo from "./todologo.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" target="blank">
              <img src={logo} width="30" height="30" alt="todo logo" />
            </a>
            <Link to="/" className="navbar-brand">MERN Stack To Do App</Link>
            <div className="collapse navbar-collapse">

              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>

                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
                
              </ul>
            </div>
          </nav>


          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
