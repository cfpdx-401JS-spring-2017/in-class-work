import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import StoreDetail from './StoreDetail';
import qs from 'qs';


function Store({ name, address, url }) {
  return (
    <li><Link to={url}>{name}</Link></li>   
  );
}

export default class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: []
    }
  }

  componentDidMount() {
    fetch('/api/stores')
      .then(res => res.json())
      .then(stores => this.setState({ stores }))
      .catch(error => console.log(error));
  }

  render() {
    const { match, location } = this.props;
    const { stores } = this.state;
    const view = qs.parse(location.search.slice(1)).view

    return (
      <div>
        <h2>Stores Page</h2>
        <h3>{view}</h3>
        <ul>
          {stores.map(store => <Store 
            key={store._id} {...store} 
            url={`${match.url}/${store._id}`}/>
          )}
        </ul>
        <Route path={`${match.url}/:storeId`} component={StoreDetail}/>
      </div>
    );
  }
}