import React, { Component } from 'react';

export default class AddStore extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      store: {
        name: ''
      } 
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      store: {...this.state.store, [target.name]: target.value }
    });
  }

  render() {
    const { store } = this.state;
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.onAdd(this.state.store);
      }}>
        <input name="name" value={store.name} onChange={this.handleChange}/>
        <button type="submit">Add</button>
      </form>
    );
  }
}