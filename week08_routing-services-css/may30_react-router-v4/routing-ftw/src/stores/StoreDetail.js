import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// import Pets from '../pets/Pets';

function PetDetail({ match }) {
  return <div>Pet Detail...{match.params.petId}</div>
}

export default class StoreDetail extends Component {

		constructor(props){
				super(props);

				this.state = {
						store: null
				};
		}

		componentDidMount() {
      const { params } = this.props.match;
      this.fetchStore(params.storeId);
		}

    componentWillReceiveProps(nextProps) {
      const nextStoreId = nextProps.match.params.storeId;
      if(nextStoreId !== this.props.match.params.storeId) {
        this.fetchStore(nextStoreId);
      }
    }

    fetchStore(storeId) {
      fetch(`/api/stores/${storeId}`)
        .then(res => res.json())
        .then(store => this.setState({ store }))
        .catch(error => console.log(error));
    }

		render() {
      const { store } = this.state;
      const { match } = this.props;
      
      if(!store) return <div>Loading...</div>;

      return (
        <div>
          <h4>{store.name}</h4>
          <ul>
            {store.pets.map(({ _id, name }) => (
              <li key={_id}>
                <Link to={`${match.url}/pets/${_id}`}>{name}</Link>
              </li>
            ))}
          </ul>
          <Route path={`${match.url}/pets/:petId`} component={PetDetail}/>
        </div>
      );
		}
}