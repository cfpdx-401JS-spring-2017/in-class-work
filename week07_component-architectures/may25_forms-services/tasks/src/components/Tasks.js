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
    tasksApi.addTask(task)
      .then(task => {
        this.setState({
          tasks: [...this.state.tasks, task]
        });
      })
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
            onAdd={this.handleAdd}/>
        </div>
      </div>
    );
  }
}

