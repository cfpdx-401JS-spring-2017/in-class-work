import React, { Component } from 'react';

export default class AddStore extends Component {
  constructor(props) {
    super(props);
    // track the local form state, plus any error message from
    // calling onAdd
    this.state = { 
      store: this.getNewStore(),
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getNewStore() {
    return { name: '' }; 
  }

  // each form field change, update the store state
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
        // call the onAdd prop
        this.props.onAdd(this.state.store)
          // but use the promise to wait and see
          // what to do.
          // success? reset form and clear any error
          .then(() => this.setState({ 
            store: this.getNewStore(),
            error: ''
          }))
          // failure? show the error.
          // this means the data will still be in the form
          // so user can correct or change
          .catch(error => this.setState(error));
      }}>
        { error && <pre style={{color: 'red'}}>{error}</pre> }
        <input name="name" value={store.name} onChange={this.handleChange}/>
        <button type="submit">Add</button>

      </form>
    );
  }
}