import React, { Component } from 'react';
import storesApi from '../services/storesApi';

export default function withStores(ComposedComponent) {

  return class StoresContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        stores: null,
        error: null
      };

      this.handleAdd = this.handleAdd.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
      storesApi.getAll()
        .then(stores => {
          this.setState({ stores, error: null });
        })
        .catch(error => {
          this.setState({ error });
        });
    }

    handleAdd(store) {
      storesApi.add(store)
        .then(saved => {
          this.setState({
            stores: [...this.state.stores, saved]
          });
        });
    }

    handleDelete(id, index) {

    }

    render() {
      const { stores, error } = this.state;
      if(!stores) return null;
      if(error) return <pre style={{color: 'red'}}>{error}</pre>;

      return <ComposedComponent {...this.props} 
        stores={stores}
        onAdd={this.handleAdd}
        onDelete={this.handleDelete}/>;
    }
  };
}