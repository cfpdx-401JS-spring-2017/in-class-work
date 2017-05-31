import React, { Component } from 'react';

export default function withStores(ComposedComponent) {

  return class StoresContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        stores: null
      };

      this.handleAdd = this.handleAdd.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
      fetch('/api/stores')
        .then(res => res.json())
        .then(stores => this.setState({ stores }))
        .catch(error => console.log(error));
    }

    handleAdd(store) {

    }

    handleDelete(id, index) {

    }

    render() {
      const { stores } = this.state;
      if(!stores) return null;
      return <ComposedComponent {...this.props} 
        stores={stores}
        onAdd={this.handleAdd}
        onDelete={this.handleDelete}/>;
    }
  };
}