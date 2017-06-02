import React from 'react';
import { Route } from 'react-router-dom';
import withStores from './withStores';
import Store from './Store';
import StoreDetail from './StoreDetail';
import AddStore from './AddStore';
import styled, { css } from 'styled-components';

const paddedPink = css`
  color: pink;
  padding: 5px;
`;

const StyledStore = styled(Store)`
  ${paddedPink}
  font-size: 20px;
`;

// Stores is a stateless component. Only renders stores,
// doesn't know about stores data that comes via props
// --
// Notice: the onAdd and onDelete are being injected here
// as props from the withStores StoresContainer.
// Notice: match is a "pass-thru" property from the outer 
// StoresContainer wrapper that got it from <Route> in App.js
function Stores({ stores, match, onAdd, onDelete }) {
  return (
    <div>
      <h2>All Our Pet Stores</h2>
      <ul>
        {stores.map(store => 
          <StyledStore 
            key={store._id} 
            to={`${match.url}/${store._id}`}
            {...store}/>
        )}
      </ul>
    
      <AddStore onAdd={onAdd}/>

      <Route path={`${match.url}/:storeId`} component={StoreDetail}/>
    </div>
  );
}

// now let's "wrap" Stores via a call to withStores
// that will "inject" the stores prop and the add and delete
// functions
export default withStores(Stores);
