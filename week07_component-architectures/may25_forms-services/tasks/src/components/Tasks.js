import React, { Component } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import tasksApi from '../services/tasksApi';
import './Tasks.css';

export default class Tasks extends Component {

  constructor(props) { 
    super(props);

    this.state = {
      tasks: null,
      types: null,
      filter: ''
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    tasksApi.addTask(task)
      .then(task => {
        this.setState({
          tasks: [...this.state.tasks, task]
        });
      })
  }

  handleDelete(id, index) {
    tasksApi.deleteTask(id)
      .then(() => {
        const tasks = this.state.tasks.slice();
        tasks.splice(index, 1);
        this.setState({ tasks });
      })
  }

  filterTasks() {
    const { filter, tasks } = this.state;
    if (!filter) return tasks;

    return tasks.filter(task => {
      return task.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  render() {
    const { tasks, types, filter } = this.state;
    if (!tasks) return <div>Loading...</div>;

    return (
      <div>
        <div className="control">
          <label>
            filter:
            <input value={filter}
              onChange={({ target }) => this.setState({
                filter: target.value
              })}/>
          </label>
        </div>
        <ul>
          {this.filterTasks().map((task, index) => (
            <Task
              key={task._id}  
              name={task.name}
              type={this.getType(task.type)}
              onDelete={() => this.handleDelete(task._id, index)}
            />
          ))}
        </ul>
        <div className="control">
          <AddTask types={types}
            onAdd={this.handleAdd}/>
        </div>
      </div>
    );
  }
}

