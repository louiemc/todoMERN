import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TodosList from "./components/TodosList";
import EditTodo from "./components/TodoEdit";
import CreateTodo from "./components/TodoCreate";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MERN To Do App</h2>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
