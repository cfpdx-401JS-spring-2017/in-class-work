import React, { Component } from 'react';
import Task from './Task';
import tasksApi from '../services/tasksApi';
import './Tasks.css';

export default class Tasks extends Component {

  constructor(props) { 
    super(props);

    this.state = {
      tasks: null,
      types: null
    }

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    return Promise.all([
      tasksApi.getTasks(),
      tasksApi.getTypes()
    ]).then(([tasks, types]) => {
      this.setState({ tasks, types });
    })
  }

  getType(id) {
    return this.state.types.find(t => t._id === id).name;
  }

  handleAdd(task) {

  }

  render() {
    const { tasks, types } = this.state;
    if (!tasks) return <div>Loading...</div>;

    return (
      <div>
        <ul>
          {tasks.map(task => <Task
            key={task._id}  
            name={task.name}
            type={this.getType(task.type)}
          />)}
        </ul>
        <div className="add-task">
          <AddTask types={types}
            onAdd={this.handleAdd} />
        </div>
      </div>
    );
  }
}

class AddTask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      type: props.types[0]._id
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleTypeChange(event) {
    this.setState({
      type: event.target.value
    });
  }

  render() {
    const { name, type } = this.state;

    return (
      <div>
        <h2>Add a Task</h2>
        <form>
          <label>
            name: <input name="name"
              value={name}
              onChange={this.handleNameChange}/>
          </label>
          <label>
            type:
            <select name="type"
              value={type}
              onChange={this.handleTypeChange}
            >
              {this.props.types.map(type => (
                <option key={type._id}
                  value={type._id}>
                  {type.name}
                </option>
              ))}

            </select>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

