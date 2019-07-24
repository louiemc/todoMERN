import React, { Component } from "react";
import axios from "axios";

class TodoCreate extends Component {
  // insert a constructor here
  constructor(props) {
    // calling parent's constructor and passing it props
    super(props);

    // coming back to the constructor to make sure all methods are bound to this object bringing in code to bind to all methods
    // otherwise we wont be able to access the state
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // setting state here for the component; todo properties (can add on if you wish)
    this.state = {
      // property todo_description which is set to an empty string
      todo_description: "",
      // property todo_responsible which is empty by default as well
      todo_responsible: "",
      // property todo_priority is empty too
      todo_priority: "",
      // property todo_completed is set to false
      todo_completed: false
    };
  }

  // methods that can be used by the form to update the state object with those values inputed by the user
  // method take an event as a parameter here
  onChangeTodoDescription(e) {
    this.setState({
      // want to update todo_description, in the event taking the value of this
      todo_description: e.target.value
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      // want to update todo_description, in the event taking the value of this
      todo_responsible: e.target.value
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      // want to update todo_description, in the event taking the value of this
      todo_priority: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault(); // prevent default submit behavior by browser

    // submit logic will be added later once backend is created
    console.log(`Form Submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);
    console.log(`Todo Completed: ${this.state.todo_completed}`);

    // brining in code to communicate to backend
    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };

    axios
      .post("http://localhost:3001/todos/add", newTodo)
      .then(res => console.log(res.data));

    this.setState({
      // property todo_description which is set to an empty string
      todo_description: "",
      // property todo_responsible which is empty by default as well
      todo_responsible: "",
      // property todo_priority is empty too
      todo_priority: "",
      // property todo_completed is set to false
      todo_completed: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: "20" }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOption"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <lable className="form-check-label">Low</lable>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOption"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPriority}
              />
              <lable className="form-check-label">Medium</lable>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOption"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPriority}
              />
              <lable className="form-check-label">High</lable>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoCreate;
