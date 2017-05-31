import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Store from './Store';
import StoreDetail from './StoreDetail';

export default class Stores extends Component {
  
  render() {
    const { stores, match } = this.props;

    return (
      <div>
        <h2>All Our Pet Stores</h2>
        <ul>
          {stores.map(store => 
            <Store 
              key={store._id} 
              to={`${match.url}/${store._id}`}
              {...store}/>
          )}
        </ul>
        <Route path={`${match.url}/:storeId`} component={StoreDetail}/>
      </div>
    );
  }
}