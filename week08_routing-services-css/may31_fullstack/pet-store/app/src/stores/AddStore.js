import React, { Component } from 'react';

export default class AddStore extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      store: this.getNewStore(),
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getNewStore() {
    return { name: '' }; 
  }

  handleChange({ target }) {
    this.setState({
      store: {...this.state.store, [target.name]: target.value }
    });
  }

  render() {
    const { store, error } = this.state;
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.onAdd(this.state.store)
          .then(() => this.setState({ 
            store: this.getNewStore(),
            error: ''
          }))
          .catch(error => this.setState(error));
      }}>
        { error && <pre style={{color: 'red'}}>{error}</pre> }
        <input name="name" value={store.name} onChange={this.handleChange}/>
        <button type="submit">Add</button>

      </form>
    );
  }
}