import React from 'react';
import { Route } from 'react-router-dom';
import withStores from './withStores';
import Store from './Store';
import StoreDetail from './StoreDetail';

function Stores({ stores, match }) {
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

export default withStores(Stores);
