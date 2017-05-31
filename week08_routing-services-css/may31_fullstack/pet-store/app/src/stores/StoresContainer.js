import React, { Component } from 'react';
import Stores from './Stores';

export default class StoresContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: null
    };
  }

  componentDidMount() {
    fetch('/api/stores')
      .then(res => res.json())
      .then(stores => this.setState({ stores }))
      .catch(error => console.log(error));
  }

  render() {
    const { stores } = this.state;
    if(!stores) return null;
    return <Stores {...this.props} 
      stores={stores}/>;
  }
}