import React, { Component } from 'react';

export default class AddTask extends Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.handleChange = this.handleChange.bind(this);
  }

  getInitialState() { 
      return {
          name: '',
          type: this.props.types[0]._id
      };
  }

  reset() {
      this.setState(this.getInitialState());
  }  

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, type } = this.state;

    return (
      <div>
        <h2>Add a Task</h2>
        <form onSubmit={e => {
          e.preventDefault();
          this.props.onAdd(this.state);
          this.reset();      
        }}>
          <label>
            name: <input name="name"
              required  
              value={name}
              onChange={this.handleChange}/>
          </label>
          <label>
            type:
            <select name="type"
              required
              value={type}
              onChange={this.handleChange}>
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
